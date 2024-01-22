const express = require('express');
const { getAllUsers, register, login } = require('../controllers/authControllers');
const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/').get(getAllUsers)

module.exports = router;