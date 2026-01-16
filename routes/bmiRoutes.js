const express = require("express");
const router = express.Router();

const {
  addBMI,
  getBMIHistory
} = require("../controllers/bmiController");

// Add BMI entry
router.post("/add", addBMI);

// Get BMI history for user
router.get("/:userId", getBMIHistory);

module.exports = router;
