import { Router } from "express";
import CarController from "../database/controllers/carController";

const router = Router();

const carController = new CarController();

router.post('/', carController.newCar);
router.get('/', carController.getAllCars);
router.put('/:id', carController.carUpdate);

export default router;