const bcrypt = require('bcrypt');
const UserModel = require('../models/user');

const SALT_ROUNDS = 10;

const signupController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = new UserModel({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Signup successful.' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Server error.' });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // TODO: Generate and return a JWT token or session here if needed

    res.status(200).json({ message: 'Login successful.' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error.' });
  }
};

const forgotPasswordController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      user.password = hashedPassword;
      await user.save();

      return res.status(200).json({ message: 'Password reset successful.' });
    }


    res.status(200).json({ message: 'Reset link sent to your email.' });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ error: 'Server error.' });
  }
};

module.exports = {
  signupController,
  loginController,
  forgotPasswordController,
};
