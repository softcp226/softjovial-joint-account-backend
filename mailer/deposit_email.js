const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { datetime } = require("./system-variables");
// const transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.softjovial.com",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 587,
//     auth: {
//       user: "support@softjovial.com",
//       pass: "softjovial1@1",
//     },
//   }),
// );

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `DEPOSIT REQUEST NOTIFICATION`,
    //   text:"just wanna know if this works",
    //     html: `<link rel="preconnect" href="https://fonts.googleapis.com" />
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    // <link
    //   href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=Nunito+Sans:ital,wght@0,600;0,700;1,600&family=Nunito:ital,wght@0,200;0,300;1,200&family=Open+Sans&family=Poppins:wght@200&family=Roboto:wght@400;500&display=swap"
    //   rel="stylesheet"
    // />
    // <main>

    //  <style>
    // @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=Nunito+Sans:ital,wght@0,600;0,700;1,600&family=Nunito:ital,wght@0,200;0,300;1,200&family=Open+Sans&family=Poppins:wght@200&family=Roboto:wght@400;500&display=swap');

    // .maincontainer{
    // font-family: 'Nanum Gothic Coding', monospace;
    // font-family: 'Nunito', sans-serif;
    // font-family: 'Nunito Sans', sans-serif;
    // font-family: 'Open Sans', sans-serif;
    // font-family: 'Poppins', sans-serif;
    // font-family: 'Roboto', sans-serif;
    //       width: 100%;
    //       top: 0;
    //       left: 0;
    //       right: 0;
    //       font-weight: 100;
    //       line-height: 2.5;
    //     }
    //     .cordial {
    //       font-size: 16px;

    //     }
    //     .head-txt {
    //       text-align: center;
    //       background-color: #142c8e;
    //       font-size: 20px;
    //       color: #fff;
    //     }
    //     .paragraph-01,
    //     .paragraph-02 {
    //       font-size: 15.5px;
    //       padding: 1px;
    //     }
    //     .paragraph-03 {
    //       font-weight: 400;
    //       font-size: 15.5px;
    //       padding: 1px;
    //       color: green;
    //     }
    //     .paragraph-04{
    //       font-size: 15.5px;
    //       padding: 1px;
    //     }
    //     .disclaimer{
    //         font-size: 12px;
    //         font-weight: 700;
    //         padding: 0px;
    //     }
    //     h1,h2,h4,h5,h6{
    //         font-size: 18px;
    //     }
    //   </style>

    //     <div class="head-txt">
    //       <h1 style="text-align: center; font-size: 16px; color: #0c0e28">
    //         SOFTJOVIAL
    //       </h1>
    //       <h3 style="font-size: 15px">DEPOSIT REQUEST NOTIFICATION</h3>
    //     </div>

    //     <p class="sm-p">
    //        Dear ${userInfo.first_name} ${userInfo.last_name}, we have recieved a deposit
    //      request you made on <b>${datetime}</b>.
    //     However your request need to undergo a human verification to make sure the deposit was sent correctly,and yor fund will be made available to your account as soon as possible
    //     </p>
    //     <p class="sm-p">
    //       NB: For more detailed informations, please contact our customer support or
    //       your relationship officer
    //     </p>

    //     <p class="sm-p">
    //       incase you have any questions do not hesitate to contact us and we will
    //       reach out to you as soon as possible
    //     </p>
    //     <br />
    //     <h1
    //       style="
    //         font-size: 18px;
    //         text-align: center;
    //         background: #eee;
    //         color: #0c0e28;
    //       "
    //     >
    //       SOFTJOVIAL.BIZ
    //     </h1>
    //     <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
    //       Disclaimer: this message was automatically generated via softjovial
    //       secured channel,please do not reply to this message all correspondence
    //       should be addressed to softjovial.biz or your relationship officer
    //     </p>
    //   </div>
    // </main>
    //  `,

    html: `
   
        <div class="mail_template"
            style="max-width: 600px; margin: auto; font-family: 'Poppins', sans-serif; background-color: #f2f2f2; padding: 20px; border-radius: 10px; border: 1px solid #ccc;">
            <div style="text-align: center;">
                <img src="https://softjovial.biz/css/images/IMG-20220829-WA0004~4.jpg"   alt="Company Logo" style="width: 80px; border-radius: 50%;">
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <h3 style="font-size: 24px; font-weight: bold; color: #333;">DEPOSIT REQUEST NOTIFICATION</h3>
            </div>
            <div style="margin-top: 30px;">
                <p style="font-size: 18px; color: #555;">Dear ${userInfo.full_name},</p>
                <p style="font-size: 18px; color: #555;">  we have recieved a deposit request you made on <b>${datetime}</b> Go ahead and complete your deposit</p>
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
