const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post.js');

router.get('/', postCtrl.findAllPost);
router.get('/:id', postCtrl.findOnePost);
//router.put('/:id', multer, postCtrl.modifySauce);  
//router.delete('/:id', multer, postCtrl.deleteSauce);
//router.post('/',multer, postCtrl.createPost);

module.exports = router;