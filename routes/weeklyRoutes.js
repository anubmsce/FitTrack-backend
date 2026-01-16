const express = require("express");
const router = express.Router();

const {
  addWeeklyEntry,
  getWeeklyEntries,
  clearWeeklyEntries
} = require("../controllers/weeklyController");

// Add weekly tracker entry
router.post("/add", addWeeklyEntry);

// Get weekly tracker by user
router.get("/:userId", getWeeklyEntries);

// Clear weekly tracker for user
router.delete("/clear/:userId", clearWeeklyEntries);

module.exports = router;
