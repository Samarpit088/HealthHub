const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookingSchema = new Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctors",
      required: true,
    },
    patient: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    timeSlot: {
      type: String,
      required: true,
    },
    healthConcern: {
      type: String,
      required: false,
      trim: true,
    }
  },
  { timestamps: true }
);

const BookingModel = mongoose.model("Booking", BookingSchema);

module.exports = BookingModel;
