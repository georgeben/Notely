const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notes');

router.get('/', (req, res) => {
    res.send('Welcome to Notely API');
});

router.post('/notes', noteController.create);

router.get('/notes', noteController.display)

module.exports = router;