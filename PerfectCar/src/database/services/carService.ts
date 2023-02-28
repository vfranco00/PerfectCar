import Car from "../models/cars";
import ICar from '../interfaces/ICar';

export default class CarService {
    public model = Car;

    public async createNewCar(car: ICar): Promise<Car> {
        const newCar = await this.model.create({ ...car });
        return newCar;
    }

    public async getAllCars(): Promise<Car[]> {
        const allCars = await this.model.findAll({});
        return allCars;
    }
}