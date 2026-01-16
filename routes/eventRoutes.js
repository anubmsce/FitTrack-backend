const express = require("express");
const router = express.Router();
const {
  registerEvent,
  getEventRegistrations
} = require("../controllers/eventController");

router.post("/register", registerEvent);
router.get("/", getEventRegistrations);

module.exports = router;
