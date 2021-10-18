const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config'); 

const postCtrl = require('../controllers/post.controller');

router.post('/',auth , multer, postCtrl.createArticle);
router.get('/', auth, postCtrl.findAll);
router.get('/:id', auth, postCtrl.getOneArticle);
router.put('/:id', auth, multer, postCtrl.modifyArticle);
router.delete('/:id', auth,postCtrl.deleteArticle);

module.exports = router;  