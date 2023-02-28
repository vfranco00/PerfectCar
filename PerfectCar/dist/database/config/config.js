"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'PerfectCar',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3308),
    dialect: 'mysql',
};
module.exports = config;
