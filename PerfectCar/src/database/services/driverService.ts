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

    public async getDriverById(id: string): Promise<Driver[]> {
        const driverFound = await this.model.findByPk(id);
        if (driverFound === null) {
            console.log('Not Found');
            return [];
        } else {
            console.log(driverFound);
            return [driverFound];
        }
    }

    public async updateDriver(id: string, name: string): Promise<Driver[]> {
        const driverFoundId = await this.model.findByPk(id);
        if (driverFoundId !== null) {
            const driverUpdate = driverFoundId.set({ name: `${name}` });
            await driverUpdate.save();
            console.log(driverUpdate);
            return [driverUpdate];
        } else {
            return [];
        }
    }
}
