const router = require("express").Router();

const controller  = require('../controllers/index')

router.post('/createpost',controller.createpost)
router.post('/deletepost',controller.deletepost)
router.post('/getpost',controller.getpost)
router.post('/getAllposts',controller.getAllposts)
router.patch('/updatepost',controller.updatePost)
// router.post('/getcomments',controller.getComment)
router.patch('/postcomment',controller.postComment)
module.exports = router;