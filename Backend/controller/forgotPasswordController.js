const User = require('../model/Users');
const sendEmail = require('./sendmail');

const forgotPasswordController = async (req,res)=>{
   
        let userExist  = await User.findOne({ email: req.body.email })
        
        // await User.findOne({ "$or": [ { email: email }, { phone: phone} ] });
        console.log('user exist-----------',userExist);

        if(userExist===null)

        {
            res.send({msge:"User not exist"})

        }else{
            res.send({msge:"User-exist"});



            console.log('--------------req email',req.body.email);
            // send grid
            sendEmail(req.body.email);
        }
        

}

module.exports = forgotPasswordController;  