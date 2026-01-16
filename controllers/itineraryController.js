const Itinerary = require("../models/Itinerary");

// ➕ Save itinerary
exports.saveItinerary = async (req, res) => {
  try {
    const itinerary = new Itinerary(req.body);
    const saved = await itinerary.save();

    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({
      message: "Failed to save itinerary",
      error: error.message
    });
  }
};

// 📄 Get itinerary by userId
exports.getItinerary = async (req, res) => {
  try {
    const { userId } = req.params;

    const itinerary = await Itinerary.findOne({ userId }).sort({ createdAt: -1 });

    res.json(itinerary);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch itinerary",
      error: error.message
    });
  }
};
