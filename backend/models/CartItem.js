// models/cartitem.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // adjust path as needed

const CartItem = sequelize.define('CartItem', {
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  itemType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  itemDetails: {
    type: DataTypes.JSON, // not STRING
    allowNull: false,
  }
}, {
  tableName: 'carts',
  timestamps: true,
});

export default CartItem;
