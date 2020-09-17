const express = require('express');
const router = express.Router();


//const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post.controller.js');

router.get('/', postCtrl.findAllPost);
router.get('/:id',  postCtrl.findOnePost);
//router.put('/:id', postCtrl.modifySauce);  
//router.delete('/:id', postCtrl.deleteSauce);
router.post('/', postCtrl.createPost);

module.exports = router;