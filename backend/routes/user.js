const express = require('express');
const router = express.Router();
const rateLimiter = require("../middleware/rateLimiter");


const userCtrl = require('../controllers/user.js');
const auth = require('../middleware/auth');

//const verifyPassword = require('../middleware/verifyPassword');

router.post('/signup',rateLimiter, userCtrl.signup);
router.post('/login',rateLimiter, userCtrl.login);
router.delete('/:id', auth, userCtrl.delteteAccount);
router.get('/:id', auth,  userCtrl.findUser)

module.exports = router;