const NoteModel = require('../models/note');

const createNote = async (req, res) => {
  try {
    const { title, priority, email, note, timestamp } = req.body;

    const newNote = new NoteModel({
      title,
      priority,
      email,
      note,
      timestamp,
    });

    const savedNote = await newNote.save();
    return res.status(201).json({ message: 'Note created successfully.', data: savedNote });
  } catch (error) {
    console.error('Error in createNote:', error);
    return res.status(500).json({ message: 'Server error. Could not create note.' });
  }
};

const getAllNotes = async (req, res) => {
  try {
    const notes = await NoteModel.find().sort({ timestamp: -1 });
    return res.status(200).json({ data: notes });
  } catch (error) {
    console.error('Error in getAllNotes:', error);
    return res.status(500).json({ message: 'Server error. Could not fetch notes.' });
  }
};

const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await NoteModel.findById(id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found.' });
    }

    return res.status(200).json({ data: note });
  } catch (error) {
    console.error('Error in getNoteById:', error);
    return res.status(500).json({ message: 'Server error. Could not retrieve note.' });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id, title, priority, email, note, timestamp } = req.body;

    const updatedNote = await NoteModel.findByIdAndUpdate(
      id,
      { $set: { title, priority, email, note, timestamp } },
      { new: true, runValidators: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found for update.' });
    }

    return res.status(200).json({ message: 'Note updated successfully.', data: updatedNote });
  } catch (error) {
    console.error('Error in updateNote:', error);
    return res.status(500).json({ message: 'Server error. Could not update note.' });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNote = await NoteModel.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found for deletion.' });
    }

    return res.status(200).json({ message: 'Note deleted successfully.' });
  } catch (error) {
    console.error('Error in deleteNote:', error);
    return res.status(500).json({ message: 'Server error. Could not delete note.' });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
