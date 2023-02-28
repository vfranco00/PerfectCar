"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const driverController_1 = __importDefault(require("../database/controllers/driverController"));
const router = (0, express_1.Router)();
const driverController = new driverController_1.default();
router.post('/', driverController.newDriver);
router.get('/', driverController.getAllDrivers);
exports.default = router;
