

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DB Connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

// Cart Model
const Cart = sequelize.define('Cart', {
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  itemType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  itemDetails: {
    type: DataTypes.JSON,
    allowNull: false,
  },
}, {
  tableName: 'carts',
  timestamps: true,
});

// Sync DB
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected!');
    await sequelize.sync();
    console.log('✅ Cart table synced!');
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
  }
})();

// Root test route
app.get('/', (req, res) => {
  res.send('API Server is running');
});

// Routes with /api prefix
app.get('/api/cart', async (req, res) => {
  try {
    const items = await Cart.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/cart', async (req, res) => {
  const { itemName, itemType, itemDetails } = req.body;
  try {
    const newItem = await Cart.create({ itemName, itemType, itemDetails });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/cart/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Cart.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Deleted successfully' });
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
