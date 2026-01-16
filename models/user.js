const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: Number,
    goal: String,
    gender: String,
    mobile: String,
    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
