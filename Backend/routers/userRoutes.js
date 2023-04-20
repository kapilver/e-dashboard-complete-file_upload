const express = require('express')
const router = new express.Router();
const loginController = require('../controller/loginController');
const registerController = require('../controller/registerController');
const forgotPasswordController = require('../controller/forgotPasswordController')
const updatePassword = require('../controller/updatePassword')
const sendEmail = require('../controller/sendmail');
const multer = require('multer');
// const uploadFile = require('../controller/uplaodFile');


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            console.log('destination', file);
            try {
                cb(null, '')
            } catch (e) {
                cb(e)
            }
        },          
        filename: function (req, file, cb) {
            console.log('filename', file);
            try {
                let a = file.originalname.split('.')

                cb(null, `${file.fieldname}-${new Date().getTime()}.${a[a.length - 1]}`)
            } catch (e) {
                cb(e)
            }
            //cb(null, file.fieldname + '-' + Date.now())
        }
    })
})



// const validationLogin = require('../middleware/loginValidation') 
// const signupValidation = require('../middleware/signupValidation')


router.post('/login', loginController);
router.post("/register", upload.single('image'), registerController);
router.post("/Forget-password", forgotPasswordController);
router.post('/updatepassword', updatePassword);
router.get('/sendmail', sendEmail);
// router.get('/upladod_file', sendEmail);

module.exports = router