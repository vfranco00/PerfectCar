import { Request, Response } from "express";
import CarService from "../services/carService";

export default class CarController {
  constructor(private carService = new CarService()) { };

  public newCar = async (req: Request, res: Response) => {
    const { plate, color, brand } = req.body;
    const newCarInsert = await this.carService.createNewCar({
        plate,
        color,
        brand,
    });
    console.log(newCarInsert);
    res.status(201).json(newCarInsert);
  }

  public getAllCars = async (req: Request, res: Response) => {
    const allCars = await this.carService.getAllCars();
    res.status(200).json(allCars);
  }
}