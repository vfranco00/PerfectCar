import { Router } from "express";
import CarController from "../database/controllers/carController";

const router = Router();

const carController = new CarController();

router.post('/', carController.newCar);
router.get('/', carController.getAllCars);

export default router;