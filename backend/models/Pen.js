import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Pen = sequelize.define('Pen', {
  text: DataTypes.STRING,
  textColor: DataTypes.STRING,
});

export default Pen;
