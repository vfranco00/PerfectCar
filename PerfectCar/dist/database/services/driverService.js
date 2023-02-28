"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const drivers_1 = __importDefault(require("../models/drivers"));
class DriverService {
    constructor() {
        this.model = drivers_1.default;
    }
    createNewDriver(driver) {
        return __awaiter(this, void 0, void 0, function* () {
            const newDriver = yield this.model.create(Object.assign({}, driver));
            return newDriver;
        });
    }
    getAllDrivers() {
        return __awaiter(this, void 0, void 0, function* () {
            const drivers = yield this.model.findAll({});
            return drivers;
        });
    }
    getDriverById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const driver = yield this.model.findByPk(id);
            if (driver === null) {
                console.log('Not Found');
            }
            else {
                console.log(driver);
                return driver;
            }
        });
    }
}
exports.default = DriverService;
