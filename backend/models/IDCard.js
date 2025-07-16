import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const IDCard = sequelize.define('IDCard', {
  backgroundColor: DataTypes.STRING,
  backgroundImage: DataTypes.STRING,
  watermarkText: DataTypes.STRING,
  watermarkColor: DataTypes.STRING,
});

export default IDCard;
