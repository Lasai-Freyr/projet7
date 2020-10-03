const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const comCtrl = require('../controllers/commentaires.js');

router.get('/', auth, comCtrl.findAllCommentaires);
//router.get('/:id', comCtrl.findOneCommentaire);
//router.put('/:id', comCtrl.modifySauce);  
router.delete('/:id', auth, comCtrl.deleteCommentaire);
router.post('/', auth, comCtrl.createCommentaire);

module.exports = router;