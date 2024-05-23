const Car = require('../models/car.model');

const getCars = async (req, res) => {
    const limit = parseInt(req.query.limit);

    let cars = null;

    if (!limit) {
        cars = await Car.find();
    } else {
        cars = await Car.find().limit(limit);
    }

    res.send({
        cars: cars,
        no_of_cars: cars.length,
        current_date: new Date(),
    });
}

const getSingleCar = async (req, res) => {
    const carId = req.params.id;
    const car = await Car.findById(carId);
    if (!car) {
        res.status(404).send({
            message: "Car not found"
        });
    }
    res.send({
        car: car,
        message: "Car details"
    });
};

const storeCar = async (req, res) => {
    try {
        const car = await Car.create({
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            color: req.body.color,
            image: req.body.image,
            pricePerDay: req.body.pricePerDay,
            mileage: req.body.mileage,
            transmission: req.body.transmission,
            fuelType: req.body.fuelType,
            seats: req.body.seats,
            features: req.body.features,
        });
        res.status(200).send({
            car: car,
            message: "Car added successfully"
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while adding the car."
        });
    }
};

module.exports = {
    getCars,
    getSingleCar,
    storeCar,
};