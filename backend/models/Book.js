import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Book = sequelize.define('Book', {
  text: DataTypes.STRING,
  textColor: DataTypes.STRING,
  coverColor: DataTypes.STRING,
});

export default Book;
