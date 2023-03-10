import { NextFunction, Request, Response } from "express";
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

  public carUpdate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { plate, color, brand } = req.body;
      const updatedCar = await this.carService.updateCar(id, plate, color, brand);
      if (updatedCar.length === 0) {
        return res.status(404).json({ message: 'Car dont exists to be updated' });
      } else {
        return res.status(200).json(updatedCar);
      }
    } catch (error) {
      next(error);
    }
  }

  public getAllCars = async (req: Request, res: Response) => {
    const allCars = await this.carService.getAllCars();
    res.status(200).json(allCars);
  }

  public deleteCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const deletedCar = await this.carService.deleteCar(id);
      if (!deletedCar) {
        res.status(404).json({ message: 'Car dont exists' })
      } else {
        return res.status(200).json({ message: 'Car was deleted' })
      }
    } catch(error) {
      next(error)
    }
  }

  public getCarById = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const { id } = req.params;
      const carResult = await this.carService.getCarById(id);
      if (carResult.length === 0) {
        return res.status(404).json({ message: 'Car not Found' })
      } else {
        return res.status(200).json(carResult);
      }
    } catch (error) {
      next(error)
    }
  }
}