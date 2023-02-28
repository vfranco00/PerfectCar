import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
import Driver from './drivers';

class Car extends Model {
  id!: number;
  name!: string;
};

Car.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  plate: {
    type: STRING,
    allowNull: false,
  },
  color: {
    type: STRING,
    allowNull: false,
  },
  brand: {
    type: STRING,
    allowNull: false,
  },
  startUseAt: {
    type: STRING,
    allowNull: true,
  },
  endUseAt: {
    type: STRING,
    allowNull: true,
  },
  driverId: {
    type: STRING,
    allowNull: true,
  },
  motiveUse: {
    type: STRING,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'cars',
  timestamps: false,
});

// Car.belongsTo(Driver, { foreignKey: 'driverId', as: 'id' });

// Driver.hasMany(Car, { foreignKey: 'driverId', as: 'id' });

export default Car;
