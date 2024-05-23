const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./dbConnection');
const carRoutes = require('./routes/car.routes');

const PORT = process.env.PORT || 9000;

connectDB();

// Middleware
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('This is car rental application');
});

app.use('/api/cars', carRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});