import { Model, STRING, INTEGER } from 'sequelize';
import Car from './cars';
import db from '.';

class Driver extends Model {
  id!: number;
  name!: string;
};

Driver.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'drivers',
  timestamps: false,
});

export default Driver;