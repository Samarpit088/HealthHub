const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const DoctorModel = require('./models/Doctors');
const Booking = require('./models/Booking');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'asdfghjklpoiuytrxcvbnm';


app.use('/DocsPhotos', express.static(__dirname + '/DocsPhotos'));
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URL)

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        })
        res.json(userDoc);
    }
    catch (e) {
        res.status(422).json(e);
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userDoc = await User.findOne({ email });

        if (!userDoc) {
            return res.status(404).json({ error: 'User not found' });
        }

        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (!passOk) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        jwt.sign({ email: userDoc.email, id: userDoc._id }, jwtSecret, {}, (err, token) => {
            if (err) {
                console.error('JWT Signing Error:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }
            res.cookie('token', token, { httpOnly: true }).json({ message: 'Login successful', user: userDoc });
        });

    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const { name, email, _id } = await User.findById(userData.id);
            res.json({ name, email, _id });
        })
    } else {
        res.json(null);
    }
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
})

app.get('/look', async (req, res) => {
    try {
        const specialization = req.query.specialization;
        if (!specialization) {
            return res.status(400).json({ message: "Specialization is required" });
        }

        const doctors = await DoctorModel.find({ specializeIn: specialization });
        res.json(doctors);
    } catch (error) {
        console.error("Error fetching doctors:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})


app.post("/bookings", async (req, res) => {
    try {
        const { doctor, patient, date, timeSlot,healthConcern} = req.body;

        if (!doctor || !patient || !date || !timeSlot) {
            return res.status(400).json({ message: "All fields are required" });
        }


        const newBooking = await Booking.create({ doctor, patient, date, timeSlot,healthConcern });

        res.status(201).json({ message: "Booking created successfully", booking: newBooking });
    } catch (error) {
        console.error("Booking Error:", error);
        res.status(500).json({ message: "Server error", error });
    }
});


app.get('/bookings', async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        const bookings = await Booking.find({ patient: userId })
            .populate('doctor') 
            .populate('patient', 'name email'); 
        res.json(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});





app.listen(4000);

//cjOUUavlElA8s5Vj
//mongodb+srv://HealthHub:cjOUUavlElA8s5Vj@healthhub.kczvl.mongodb.net/?retryWrites=true&w=majority&appName=HealthHub