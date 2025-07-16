import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Uniform = sequelize.define('Uniform', {
  shirtColor: DataTypes.STRING,
  pantColor: DataTypes.STRING,
  text1: DataTypes.STRING,
  text2: DataTypes.STRING,
  textColor: DataTypes.STRING
});

export default Uniform;
