const Trainer = require('../models/Trainer');

exports.registerTrainer = async (req, res) => {
  try {
    const { trainer, name, email, phone, message } = req.body;

    if (!trainer || !name || !email || !phone) {
      return res.status(400).json({ message: 'All fields required' });
    }

    const registration = new Trainer({
      trainer,
      name,
      email,
      phone,
      message
    });

    await registration.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Trainer Register Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
