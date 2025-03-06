const mongoose = require("mongoose");
const DoctorModel = require("../models/Doctors"); // Assuming your schema is in DoctorModel.js
require('dotenv').config();

const doctors = [
    // Cardiologists
    { name: "Dr. Arjun Mehta", specializeIn: "Cardiologist", exp: 12, pay: 1500, fromTime: 9, toTime: 17, photo: "../DocsPhotos/cardiologist.jpg", ratings: 4.8, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Kavita Sharma", specializeIn: "Cardiologist", exp: 10, pay: 1400, fromTime: 8, toTime: 16, photo: "../DocsPhotos/cardiologist1.jpg", ratings: 4.7, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Rajiv Verma", specializeIn: "Cardiologist", exp: 15, pay: 2000, fromTime: 8, toTime: 16, photo: "../DocsPhotos/cardiologist2.jpg", ratings: 4.9, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Meera Nair", specializeIn: "Cardiologist", exp: 9, pay: 1300, fromTime: 10, toTime: 18, photo: "../DocsPhotos/cardiologist3.jpg", ratings: 4.6, availability: false, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Vikram Joshi", specializeIn: "Cardiologist", exp: 13, pay: 1800, fromTime: 9, toTime: 17, photo: "../DocsPhotos/cardiologist4.jpg", ratings: 4.8, availability: true, languagesSpoken: ["English", "Hindi"] },

    // Dermatologists
    { name: "Dr. Arjun Mehta", specializeIn: "Dermatologist", exp: 10, pay: 1500, fromTime: 9, toTime: 17, photo: "../DocsPhotos/dermatologist.jpg", ratings: 4.7, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Priya Sharma", specializeIn: "Dermatologist", exp: 8, pay: 1400, fromTime: 10, toTime: 18, photo: "../DocsPhotos/dermatologist1.jpg", ratings: 4.5, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Rohan Gupta", specializeIn: "Dermatologist", exp: 12, pay: 1600, fromTime: 8, toTime: 16, photo: "../DocsPhotos/dermatologist2.jpg", ratings: 4.9, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Neha Kapoor", specializeIn: "Dermatologist", exp: 9, pay: 1300, fromTime: 11, toTime: 19, photo: "../DocsPhotos/dermatologist3.jpg", ratings: 4.6, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Kunal Bhatia", specializeIn: "Dermatologist", exp: 11, pay: 1550, fromTime: 9, toTime: 17, photo: "../DocsPhotos/dermatologist4.jpg", ratings: 4.8, availability: true, languagesSpoken: ["English", "Hindi"] },
    
    // Pediatricians
    { name: "Dr. Suman Verma", specializeIn: "Pediatrician", exp: 15, pay: 1800, fromTime: 8, toTime: 16, photo: "../DocsPhotos/pediatrician.jpg", ratings: 4.9, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Ananya Joshi", specializeIn: "Pediatrician", exp: 10, pay: 1700, fromTime: 9, toTime: 17, photo: "../DocsPhotos/pediatrician1.jpg", ratings: 4.7, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Vishal Nair", specializeIn: "Pediatrician", exp: 12, pay: 1750, fromTime: 10, toTime: 18, photo: "../DocsPhotos/pediatrician2.jpg", ratings: 4.8, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Pooja Iyer", specializeIn: "Pediatrician", exp: 9, pay: 1600, fromTime: 11, toTime: 19, photo: "../DocsPhotos/pediatrician3.jpg", ratings: 4.6, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Amit Saxena", specializeIn: "Pediatrician", exp: 14, pay: 1850, fromTime: 8, toTime: 16, photo: "../DocsPhotos/pediatrician4.jpg", ratings: 4.9, availability: true, languagesSpoken: ["English", "Hindi"] },
    
    // ENT Specialists
    { name: "Dr. Rajiv Verma", specializeIn: "ENT Specialist", exp: 13, pay: 1600, fromTime: 9, toTime: 17, photo: "../DocsPhotos/ent.jpg", ratings: 4.7, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Megha Sharma", specializeIn: "ENT Specialist", exp: 10, pay: 1500, fromTime: 10, toTime: 18, photo: "../DocsPhotos/ent1.jpg", ratings: 4.6, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Rakesh Pandey", specializeIn: "ENT Specialist", exp: 12, pay: 1650, fromTime: 8, toTime: 16, photo: "../DocsPhotos/ent2.jpg", ratings: 4.8, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Smita Rao", specializeIn: "ENT Specialist", exp: 9, pay: 1400, fromTime: 11, toTime: 19, photo: "../DocsPhotos/ent3.jpg", ratings: 4.5, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Arvind Malhotra", specializeIn: "ENT Specialist", exp: 11, pay: 1550, fromTime: 9, toTime: 17, photo: "../DocsPhotos/ent4.jpg", ratings: 4.7, availability: true, languagesSpoken: ["English", "Hindi"] },
    
    // Gynecologists
    { name: "Dr. Nisha Agarwal", specializeIn: "Gynecologist", exp: 14, pay: 1700, fromTime: 8, toTime: 16, photo: "../DocsPhotos/gynecologist.jpg", ratings: 4.8, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Sneha Kapoor", specializeIn: "Gynecologist", exp: 11, pay: 1600, fromTime: 9, toTime: 17, photo: "../DocsPhotos/gynecologist1.jpg", ratings: 4.7, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Manisha Singh", specializeIn: "Gynecologist", exp: 12, pay: 1650, fromTime: 10, toTime: 18, photo: "../DocsPhotos/gynecologist2.jpg", ratings: 4.9, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Vandana Roy", specializeIn: "Gynecologist", exp: 9, pay: 1500, fromTime: 11, toTime: 19, photo: "../DocsPhotos/gynecologist3.jpg", ratings: 4.6, availability: true, languagesSpoken: ["English", "Hindi"] },
    { name: "Dr. Poonam Gupta", specializeIn: "Gynecologist", exp: 13, pay: 1750, fromTime: 8, toTime: 16, photo: "../DocsPhotos/gynecologist4.jpg", ratings: 4.9, availability: true, languagesSpoken: ["English", "Hindi"] },
];

const uploadDoctors = async () => {
    try {
        await mongoose.connect('mongodb+srv://HealthHub:cjOUUavlElA8s5Vj@healthhub.kczvl.mongodb.net/?retryWrites=true&w=majority&appName=HealthHub', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected");
        
        await DoctorModel.insertMany(doctors);
        console.log("Doctors Uploaded Successfully");
        
        mongoose.disconnect();
    } catch (error) {
        console.error("Error uploading doctors:", error);
        mongoose.disconnect();
        process.exit(1);
    }
};

uploadDoctors();
