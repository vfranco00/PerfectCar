import { NextFunction, Request, Response } from "express";
import DriverService from '../services/driverService';

export default class DriverController {
  constructor(private driverService = new DriverService()) { }

  public newDriver = async (req: Request, res: Response) => {
    const { name } = req.body;
    const newDriverInsert = await this.driverService.createNewDriver({
        name,
    });
    console.log(newDriverInsert);
    res.status(201).json(newDriverInsert);
  }

  public getAllDrivers = async (req: Request, res: Response) => {
    const allDrivers = await this.driverService.getAllDrivers();
    res.status(200).json(allDrivers);
  }

  public getDriverById = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const { id } = req.params;
      const driverResult = await this.driverService.getDriverById(id);
      return res.status(200).json(driverResult);
    } catch (error) {
      next(error)
    }
  }
}