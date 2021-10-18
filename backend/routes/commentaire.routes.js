const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config'); 

const commentaireCtrl = require('../controllers/commentaire.controller');

router.post('/', auth, multer, commentaireCtrl.createCommentaire)
router.get('/:id', auth, commentaireCtrl.findAll)
router.delete('/:id', auth,commentaireCtrl.deleteCommentaire);

module.exports = router;  