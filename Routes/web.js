const express =require('express')
const UserController = require('../Controllers/UserController')
const router =express.Router()


//userController

router.get('/getalluser',UserController.getalluser)
router.post('/userinsert',UserController.userinsert)
router.post('/userdetails',UserController.getuserdetails)
router.post('/verifylogin',UserController.verifylogin)












module.exports = router