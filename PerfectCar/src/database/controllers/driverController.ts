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
      if (driverResult.length === 0) {
        return res.status(404).json({ message: 'Driver not Found' })
      } else {
        return res.status(200).json(driverResult);
      }
    } catch (error) {
      next(error)
    }
  }

  public driverUpdate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updatedDriver = await this.driverService.updateDriver(id, name);
      if (updatedDriver.length === 0) {
        return res.status(404).json({ message: 'Driver dont exists to be updated' });
      } else {
        return res.status(200).json(updatedDriver);
      }
    } catch (error) {
      next(error);
    }
  }

  public deleteDriver = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const deletedDriver = await this.driverService.deleteDriver(id);
      if (!deletedDriver) {
        res.status(404).json({ message: 'Driver dont exists' })
      } else {
        return res.status(200).json({ message: 'Driver was deleted' })
      }
    } catch(error) {
      next(error)
    }
  }
}