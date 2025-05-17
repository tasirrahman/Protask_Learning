const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');  // UUID v4 generator
require('dotenv').config();

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: uuidv4,
    unique: true,
    immutable: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model(process.env.USERAUTHDATABASE, UserSchema);

module.exports = UserModel;
