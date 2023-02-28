import Car from "./cars";

(async () => {
    const cars = await Car.findAll({});
    console.log(cars);
    process.exit(0);
})();