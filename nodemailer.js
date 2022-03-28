const { attachment } = require('express/lib/response')
const nodemailer = require('nodemailer') 
const { password } = require('pg/lib/defaults')

var transport = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user: 'usermail id' ,
            pass:'password'
         }
    }
)

var mailOptions = {
    from: 'sender id',
    to:'receiver email address ',
    cc:'',
    bcc:'',
    subject: 'test mail',
    text: 'mail sended from node with cc bbc and attachments',
    attachments: [{filename:'1.png' ,path: '/home/mukesh/daksh/alviro/node/nodev17/1.png'}]


}

transport.sendMail(mailOptions , function(err,result){
    if(err){
        console.log(err)
    }
    console.log(result)
})