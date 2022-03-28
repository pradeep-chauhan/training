const { attachment } = require('express/lib/response');
const nodemailer = require('nodemailer') ;
const { password } = require('pg/lib/defaults');

var transporter = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user: '' ,
            pass:''
         }
    }
)



var mailOptions = {
    from: '',
    to:'',
    subject: 'test mail',
    text: 'mail sended from node with cc bbc and attachments',
    html:'<h1>Hello World</h1>',
    

}

transporter.sendMail(mailOptions , function(err,result){
    if(err){
        console.log(err)
    }
    console.log(result)
})