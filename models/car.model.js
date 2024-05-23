const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema(
    {
        make: {
            type: String,
            required: [true, 'Please provide a make for the car.']
        },
        model: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        pricePerDay: {
            type: Number,
            required: true,
        },
        mileage: {
            type: Number,
            required: true,
        },
        transmission: {
            type: String,
            required: true,
            enum: ['automatic', 'manual', 'semi-automatic']
        },
        fuelType: {
            type: String,
            required: true,
            enum: ['gasoline', 'diesel', 'electric', 'hybrid']
        },
        seats: {
            type: Number,
            required: true,
        },
        availability: {
            type: Boolean,
            required: true,
            default: true,
        },
        image: {
            type: String,
            required: true,
        },
        features: {
            type: [String],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;