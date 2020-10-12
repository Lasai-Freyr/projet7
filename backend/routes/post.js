const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

const postCtrl = require('../controllers/post.js');
const likeCtrl = require('../controllers/likes.js');

router.get('/',   postCtrl.findAllPost);
router.get('/:id', auth, postCtrl.findOnePost);
router.delete('/:id', auth,  postCtrl.deletePost);
router.post('/', auth, multer,  postCtrl.createPost);

router.post('/:id/like', auth, likeCtrl.Likes);

module.exports = router;