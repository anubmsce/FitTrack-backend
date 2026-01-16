const BMILog = require("../models/BMILog");

/**
 * POST - Add BMI entry
 */
exports.addBMI = async (req, res) => {
  try {
    const { userId, weight, height, bmi, category } = req.body;

    if (!userId || !weight || !height || !bmi || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const bmiEntry = new BMILog({
      userId,
      weight,
      height,
      bmi,
      category
    });

    await bmiEntry.save();
    res.status(201).json(bmiEntry);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET - Fetch BMI history for a user
 */
exports.getBMIHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    const history = await BMILog.find({ userId })
      .sort({ createdAt: -1 });

    res.status(200).json(history);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
