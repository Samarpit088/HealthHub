const mongoose = require("mongoose");
const { Schema } = mongoose;

const DoctorSchema = new Schema({
    name: String,
    specializeIn: String,
    exp: Number,
    pay: Number,
    fromTime: Number,
    toTime: Number,
    photo: String,
    ratings: { type: Number, default: 0 },
    availability: { type: Boolean, default: true },
    languagesSpoken:{ type: [String] },
});

const DoctorModel = mongoose.model('Doctors', DoctorSchema);

module.exports = DoctorModel;