const Event = require("../models/Event");

// REGISTER FOR EVENT
exports.registerEvent = async (req, res) => {
  try {
    const { eventName, name, email, phone, message } = req.body;

    if (!eventName || !name || !email || !phone) {
      return res.status(400).json({ message: "All required fields missing" });
    }

    const newEvent = new Event({
      eventName,
      name,
      email,
      phone,
      message
    });

    await newEvent.save();

    res.status(201).json({
      message: "Event registration successful",
      data: newEvent
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET ALL EVENT REGISTRATIONS (optional/admin)
exports.getEventRegistrations = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
