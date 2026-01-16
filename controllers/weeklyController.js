const WeeklyTracker = require("../models/WeeklyTracker");

// ➕ Add weekly entry
exports.addWeeklyEntry = async (req, res) => {
  try {
    const weekly = new WeeklyTracker(req.body);
    const savedEntry = await weekly.save();

    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(400).json({
      message: "Failed to add weekly entry",
      error: error.message
    });
  }
};

// 📄 Get weekly entries by userId
exports.getWeeklyEntries = async (req, res) => {
  try {
    const { userId } = req.params;

    const entries = await WeeklyTracker.find({ userId }).sort({ createdAt: -1 });

    res.json(entries);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch weekly entries",
      error: error.message
    });
  }
};

// 🗑️ Clear weekly data for a user
exports.clearWeeklyEntries = async (req, res) => {
  try {
    const { userId } = req.params;

    await WeeklyTracker.deleteMany({ userId });

    res.json({ message: "Weekly data cleared" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to clear weekly data",
      error: error.message
    });
  }
};
