const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/', userController.getAllUsers);

router.post('/signup', userController.createNewUser);

router.post('/signin', userController.signIn)

module.exports = router;