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
const driverService_1 = __importDefault(require("../services/driverService"));
class DriverController {
    constructor(driverService = new driverService_1.default()) {
        this.driverService = driverService;
        this.newDriver = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            const newDriverInsert = yield this.driverService.createNewDriver({
                name,
            });
            console.log(newDriverInsert);
            res.status(201).json(newDriverInsert);
        });
        this.getAllDrivers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const allDrivers = yield this.driverService.getAllDrivers();
            res.status(200).json(allDrivers);
        });
        this.getDriverById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const driverResult = yield this.driverService.getDriverById(id);
                return res.status(200).json(driverResult);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = DriverController;
