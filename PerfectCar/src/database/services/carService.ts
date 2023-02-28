import Car from "../models/cars";
import ICar from '../interfaces/ICar';

export default class CarService {
    public model = Car;

    public async createNewCar(car: ICar): Promise<Car> {
        const newCar = await this.model.create({ ...car });
        return newCar;
    }

    public async updateCar(id: string, plate: string, color: string, brand: string): Promise<Car[]> {
        const carFoundId = await this.model.findByPk(id);
        if (carFoundId !== null) {
            const carUpdate = carFoundId.set({
                plate: `${plate}`,
                color: `${color}`,
                brand: `${brand}`,
            });
            await carUpdate.save();
            console.log(carUpdate);
            return [carUpdate];
        } else {
            return [];
        }
    }

    public async getAllCars(): Promise<Car[]> {
        const allCars = await this.model.findAll({});
        return allCars;
    }

    public async deleteCar(id: string): Promise<boolean> {
        const carIdFound = await this.model.findByPk(id);
        if (carIdFound !== null) {
            const carUpdate = carIdFound.destroy();
            console.log(carUpdate, 'driver return');
            return true;
        } else {
            return false;
        }
    }

    public async getCarById(id: string): Promise<Car[]> {
        const carFound = await this.model.findByPk(id);
        if (carFound === null) {
            console.log('Not Found');
            return [];
        } else {
            console.log(carFound);
            return [carFound];
        }
    }
}