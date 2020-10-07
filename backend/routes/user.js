const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.js');
//const verifyPassword = require('../middleware/verifyPassword');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/:id', userCtrl.delteteAccount);
router.get('/:id', userCtrl.findUser)

module.exports = router;