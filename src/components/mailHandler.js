"use strict";
const nodemailer = require("nodemailer");

async function main() {
   let account = await nodemailer.createTestAccount();
   let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
         user: account.user,
         pass: account.pass
      }
   });

   let mailOptions = {
      from: '<andreas@lybo.io>',
      to: 'andreas@lybo.io',
      subject: 'Hello World. Testing mail',
      text: 'Testing to see if this works'
   };

   let info = await transporter.sendMail(mailOptions);
   console.log("Message sent: %s", info.messageId);;
   console.log("Preview mail: %s", nodemailer.getTestMessageUrl(info));
   
}

main().catch( e => {
   console.log(e);
})