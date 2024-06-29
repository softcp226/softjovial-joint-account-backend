const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { datetime } = require("./system-variables");
// const transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.softjovibiz",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 587,
//     auth: {
//       user: "support@softjovibiz",
//       pass: process.env.mail_password,
//     },
//   }),
// );

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user:process.env.company_mail,
    pass: process.env.mail_password,
  },
});

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlobiz",
    to: userInfo.reciever,
    subject: `Trade Confirmation Notification`,

    html: `
   
        <div class="mail_template"
            style="max-width: 600px; margin: auto; font-family: 'Poppins', sans-serif; background-color: #f2f2f2; padding: 20px; border-radius: 10px; border: 1px solid #ccc;">
            <div style="text-align: center;">
                <img src="https://softjovial.biz/css/images/IMG-20220829-WA0004~4.jpg"   alt="Company Logo" style="width: 80px; border-radius: 50%;">
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <h3 style="font-size: 24px; font-weight: bold; color: #333;">Trade Confirmation Notification</h3>
            </div>
            <div style="margin-top: 30px;">
                <p style="font-size: 18px; color: #555;">Dear ${userInfo.full_name}</p>
                <p style="font-size: 18px; color: #555;"> Thank you for creating a trade with us. We understand that you entrust your financial investment and trading with us. We want to let you know that your trade is safe with us and we are entitled to give you the best service</p>
            </div>
            <div style="margin-top: 30px;">
                <p style="font-size: 18px; color: #555;"> For more detailed informations, please login to your account</p>
            </div>
           
            <div style="margin-top: 40px;">
                <p style="font-size: 14px; color: #999; text-align: center;">This message was generated via softjovial secured channel. Please do not take any action if you did not make this request.</p>
            </div>
        </div>
        
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        </style>
 `,
  });
};
module.exports = { create_mail_options, transporter };
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };
