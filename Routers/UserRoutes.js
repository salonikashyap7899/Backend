const express = require('express');
const router = express.Router();

const UserController = require('../controller/userController.js');

// Create user
router.post('/', UserController.createUser);

// User login
router.post('/login', UserController.loginUser);

module.exports = router;

