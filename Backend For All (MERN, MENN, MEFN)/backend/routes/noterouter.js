const express = require('express');
const router = express.Router();
const { validateCreateNote, validateGetNoteById, validateUpdateNote, validateDeleteNote, validateGetNote } = require( '../middleware/notevalidation' );
const { getAllNotes, createNote, getNoteById, updateNote, deleteNote } = require( '../controllers/noteController' );

router.post('/', validateCreateNote, createNote);
router.get('/', validateGetNote, getAllNotes);
router.get('/:id', validateGetNoteById,  getNoteById);
router.put('/', validateUpdateNote, updateNote);
router.delete('/:id', validateDeleteNote, deleteNote);

module.exports = router;
