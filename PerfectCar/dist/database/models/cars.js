"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Car extends sequelize_1.Model {
}
;
Car.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    plate: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    color: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    brand: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    startUseAt: {
        type: sequelize_1.STRING,
        allowNull: true,
    },
    endUseAt: {
        type: sequelize_1.STRING,
        allowNull: true,
    },
    driverId: {
        type: sequelize_1.STRING,
        allowNull: true,
    },
    motiveUse: {
        type: sequelize_1.STRING,
        allowNull: true,
    },
}, {
    sequelize: _1.default,
    modelName: 'cars',
    timestamps: false,
});
// Car.belongsTo(Driver, { foreignKey: 'driverId', as: 'id' });
// Driver.hasMany(Car, { foreignKey: 'driverId', as: 'id' });
exports.default = Car;
