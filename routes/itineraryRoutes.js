const express = require("express");
const router = express.Router();

const {
  saveItinerary,
  getItinerary
} = require("../controllers/itineraryController");

router.post("/save", saveItinerary);
router.get("/:userId", getItinerary);

module.exports = router;
