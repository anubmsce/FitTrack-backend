const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* =========================
   MIDDLEWARE (ORDER MATTERS)
========================= */
app.use(cors());              // 🔴 MUST BE BEFORE ROUTES
app.use(express.json());      // 🔴 REQUIRED FOR POST BODY

/* =========================
   ROUTES
========================= */
const authRoutes = require("./routes/authRoutes");
const trainerRoutes = require("./routes/trainerRoutes");
const eventRoutes = require("./routes/eventRoutes");
const itineraryRoutes = require("./routes/itineraryRoutes");
const weeklyRoutes = require("./routes/weeklyRoutes");
const bmiRoutes = require("./routes/bmiRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/itinerary", itineraryRoutes);
app.use("/api/weekly", weeklyRoutes);
app.use("/api/bmi", bmiRoutes);

/* =========================
   DATABASE CONNECTION
========================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    /* =========================
       START SERVER
    ========================= */
    app.listen(5000, () =>
      console.log("🚀 Server running on port 5000")
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
