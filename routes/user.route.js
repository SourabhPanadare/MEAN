const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.post('/login',user_controller.login); // Login New User
router.post('/register',user_controller.register); // Register New User

module.exports = router;
