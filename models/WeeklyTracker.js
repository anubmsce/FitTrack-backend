const mongoose = require("mongoose");

const WeeklyTrackerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    day: {
      type: String,
      required: true
    },

    workoutType: {
      type: String
    },

    duration: {
      type: Number
    },

    hydration: {
      water: { type: Number, default: 0 },
      tea: { type: Number, default: 0 },
      coffee: { type: Number, default: 0 },
      juice: { type: Number, default: 0 }
    },

    calories: {
      type: Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("WeeklyTracker", WeeklyTrackerSchema);
