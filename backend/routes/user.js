const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.js');
const auth = require('../middleware/auth');

//const verifyPassword = require('../middleware/verifyPassword');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/:id', auth, userCtrl.delteteAccount);
router.get('/:id', auth,  userCtrl.findUser)

module.exports = router;