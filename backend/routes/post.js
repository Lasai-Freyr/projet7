const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

const postCtrl = require('../controllers/post.js');

router.get('/',   postCtrl.findAllPost);
router.get('/:id', auth, postCtrl.findOnePost);
//router.put('/:id', auth, multer,  postCtrl.modifySauce);  
router.delete('/:id', auth,  postCtrl.deletePost);
router.post('/', auth, multer,  postCtrl.createPost);

module.exports = router;