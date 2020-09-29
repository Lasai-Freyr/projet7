const express = require('express');
const router = express.Router();

const comCtrl = require('../controllers/commentaires.js');

router.get('/', comCtrl.findAllCommentaires);
//router.get('/:id', comCtrl.findOneCommentaire);
//router.put('/:id', comCtrl.modifySauce);  
//router.delete('/:id', comCtrl.deleteSauce);
//router.post('/', comCtrl.createCommentaire);

module.exports = router;