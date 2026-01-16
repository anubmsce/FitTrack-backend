const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    morningWorkout: String,

    breakfast: String,
    lunch: String,
    dinner: String,

    college: String,
    work: String,
    eveningWalk: String,
    hobbies: String,
    nap: String,
    errands: String,
    reading: String,
    sleep: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Itinerary", itinerarySchema);
