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
}