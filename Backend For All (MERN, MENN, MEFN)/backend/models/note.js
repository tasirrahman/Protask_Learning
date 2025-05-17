const mongoose = require('mongoose');
require('dotenv').config();

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  priority: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  note: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const NoteModel = mongoose.model(process.env.NOTESDATABASE, NoteSchema);

module.exports = NoteModel;
