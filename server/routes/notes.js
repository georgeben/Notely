const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notes');

router.post('/', noteController.createNote);

router.get('/', noteController.displayAllNotes);

router.get('/:title', noteController.findOneNote);

router.put('/:id', noteController.updateNote)

router.delete('/:id', noteController.deleteNote);



module.exports = router;