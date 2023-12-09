const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');


const app = express();
const Booking = require('./models/bookingSchema'); // Import the Booking schema
const User = require('./models/userSchema'); // Adjust the path based on your project structure
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/BookSeat', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors());

// Define the Booking model


// const Booking = mongoose.model('Booking', bookingSchema);

// Define API routes for seat booking
app.post('/api/bookings', async (req, res) => {
  const { date,startTime, endTime, numSeats, selectedSeats } = req.body;

  try {
    // Check if the selected seats are available
    const overlappingBookings = await Booking.find({
      date: {$eq:date},
      startTime: { $lt: endTime },
      endTime: { $gt: startTime },
    });

    const overlappingSeatNumbers = overlappingBookings.reduce(
      (seats, booking) => seats.concat(booking.selectedSeats),
      []
    );

    const availableSeats = Array.from({ length: 10 }, (_, index) => index + 1).filter(
      (seatNumber) => !overlappingSeatNumbers.includes(seatNumber)
    );

    // Ensure that the selected seats are available
    const isAvailable = selectedSeats.every((seat) => availableSeats.includes(seat));

    // Ensure that the number of seats to book matches the number of selected seats
    const isNumSeatsMatching = numSeats === selectedSeats.length;

    if (!isAvailable) {
      return res.status(400).json({ error: 'Selected seats are not available for the specified time.' });
    }

    if (!isNumSeatsMatching) {
      return res.status(400).json({ error: 'Number of seats to book does not match the number of selected seats.' });
    }

    const booking = new Booking({
      date,
      startTime,
      endTime,
      numSeats,
      selectedSeats,
    });

    await booking.save();

    res.status(201).send('Booking created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to book seats.' });
  }
});

app.get('/api/available-seats', async (req, res) => {
  const { date,startTime, endTime } = req.query;

  try {
    // Check for overlapping bookings
    const overlappingBookings = await Booking.find({
      date: {$eq:date},
      startTime: { $lt: endTime },
      endTime: { $gt: startTime },
    });

    // Extract the seat numbers from overlapping bookings
    const overlappingSeatNumbers = overlappingBookings.reduce(
      (seats, booking) => seats.concat(booking.selectedSeats),
      []
    );

    // Calculate the available seats
    const availableSeats = Array.from({ length: 10 }, (_, index) => index + 1).filter(
      (seatNumber) => !overlappingSeatNumbers.includes(seatNumber)
    );

    if (availableSeats.length === 0) {
      return res.status(404).json({ message: 'No available seats for the specified time.' });
    }

    res.status(200).json(availableSeats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to check seat availability.' });
  }
});
// const User = mongoose.model('User', userSchema);
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Perform a password check (replace this with your actual password validation logic)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Generate an authentication token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ message: 'Authentication successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.post('/api/flogin', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Perform a password check (replace this with your actual password validation logic)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Generate an authentication token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ message: 'Authentication successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


