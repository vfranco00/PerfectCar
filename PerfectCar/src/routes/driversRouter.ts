import { Router } from "express";
import DriverController from "../database/controllers/driverController";

const router = Router();

const driverController = new DriverController();

router.post('/', driverController.newDriver);
router.get('/', driverController.getAllDrivers);
router.get('/:id', driverController.getDriverById);
router.put('/:id', driverController.driverUpdate);
router.delete('/:id', driverController.deleteDriver);

export default router;
