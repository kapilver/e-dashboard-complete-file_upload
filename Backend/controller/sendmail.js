
const sendgrid = require('@sendgrid/mail');


require('dotenv').config();
console.log(process.env.SENDGRID_API_KEY);
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY);


const sendEmail= async(email)=>{
    try {
        await sendgrid.send({
            to:email,
            //sendGrid sender id 
            from: 'kapilvermajaika@gmail.com',
            subject: 'Send e-dashboard OTP...?',
            text: 'Glad you are here .. yes you!',
            html:'<strong>It is working!!</strong>',
            
            
        });
        console.log('Test email sent successfully to '+email);
    } catch (error) {
        // console.log("err",e);
        // res.send('errror');
        console.error('Error sending test email');
        console.error(error);
        if (error.response) {
          console.error(error.response.body)
        }
    }
};

module.exports = sendEmail;