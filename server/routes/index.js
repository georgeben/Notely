const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notes');

router.get('/', (req, res) => {
    res.send('Welcome to Notely API');
});

router.post('/notes', noteController.createNote);

router.get('/notes', noteController.displayAllNotes);

router.get('/notes/:title', noteController.findOneNote);

router.put('/notes/:id', noteController.updateNote)

router.delete('/notes/:id', noteController.deleteNote);

module.exports = router;