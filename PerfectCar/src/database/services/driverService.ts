import IDriver from "../interfaces/IDriver";
import Driver from "../models/drivers";

export default class DriverService {
    public model = Driver;

    public async createNewDriver(driver: IDriver): Promise<Driver> {
        const newDriver = await this.model.create({ ...driver });
        return newDriver;
    }

    public async getAllDrivers(): Promise<Driver[]> {
        const drivers = await this.model.findAll({});
        return drivers;
    }
}