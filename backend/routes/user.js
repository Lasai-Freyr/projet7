const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.js');
//const verifyPassword = require('../middleware/verifyPassword');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/delete', userCtrl.delteteAccount);

module.exports = router;