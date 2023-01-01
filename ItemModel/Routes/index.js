const router = require("express").Router();

const controller  = require('../controllers/index')

router.post('/createitem',controller.createitem)
router.post('/deleteitem',controller.deleteitem)
router.post('/getitem',controller.getitem)
router.post('/getAllitem',controller.getAllitems)
router.patch('/updateitem',controller.updateitem)
// router.post('/getcomments',controller.getComment)
// router.patch('/postcomment',controller.postComment)
module.exports = router;