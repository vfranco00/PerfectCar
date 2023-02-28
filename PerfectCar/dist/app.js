"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const http_status_codes_1 = require("http-status-codes");
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    return res.status(http_status_codes_1.StatusCodes.OK).send('Express + TS');
});
app.use(errorMiddleware_1.default);
exports.default = app;
