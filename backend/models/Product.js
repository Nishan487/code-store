import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  type: DataTypes.STRING, // 'uniform', 'pen', 'book', etc.
  price: DataTypes.FLOAT,
  imageUrl: DataTypes.STRING,
});

export default Product;
