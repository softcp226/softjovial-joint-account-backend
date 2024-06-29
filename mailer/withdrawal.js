const nodemailer = require("nodemailer");

// let transporter = nodemailer.createTransport({
//   service: "Gmail",
//   secure: false,

//   auth: {
//     user: "panteramining642@gmail.com",
//     // pass: "desolidboy1",
//     pass: "cvqydopvaddyfnfi",
//     // secure:false,
//   },
// });

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});
let currentdate = new Date();
let datetime = `${currentdate.getFullYear()}-${
  currentdate.getMonth() + 1
}-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `Withdrawal Request Notification`,
    //   text:"just wanna know if this works",
    //     html: `
    // <link rel="preconnect" href="https://fonts.googleapis.com" />
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    // <link
    //   href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
    //   rel="stylesheet"
    // />
    // <main
    //   style="
    //     font-family: 'Nunito', sans-serif;
    //     font-family: 'Roboto', sans-serif;
    //     background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    //     width: 100%;
    //     background-size: cover;
    //   "
    // >
    //   <div class="maincontainer"  style="
    //     font-family: 'Nunito', sans-serif;
    //     font-family: 'Roboto', sans-serif;
    //     background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    //     width: 100%;
    //     background-size: cover;
    //   ">
    //     <div class="head-txt">
    //       <h1 style="text-align: center; font-size: 16px; color: #825ee4">
    //         SOFTJOVIAL.COM
    //       </h1>
    //       <h3 style="font-size: 15px">WITHDRAWAL WAS INNITIATED</h3>
    //     </div>

    //     <p class="sm-p">
    //       Dear ${userInfo.first_name} ${userInfo.last_name}, you have successfully
    //       initiated a withdrawal of crypto that amounts $${userInfo.amount} from
    //       your softjovial account on <b>${datetime}</b>.your withdrawal is still pending as our system is still verifying your request to avoid loss of funds and your money would be sent immediately after verification
    //     </p>

    //     <p class="sm-p">
    //       incase you have any questions do not hesitate to contact us and we will
    //       reach out to you as soon as possible
    //     </p>
    //     <br />
    //    <h1
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
                <h3 style="font-size: 24px; font-weight: bold; color: #333;">WITHDRAWAL PENDING</h3>
            </div>
            <div style="margin-top: 30px;">
                <p style="font-size: 18px; color: #555;">Dear ${userInfo.full_name},</p>
                <p style="font-size: 18px; color: #555;"> your withdrawal of $${userInfo.amount} from your softjovial trading account has been submitted, funds would be credited to your account once your withdrawal gets approved.</p>
            </div>
            <div style="margin-top: 30px;">
                <p style="font-size: 18px; color: #555;"> For more detailed informations, please cntact our customer support</p>
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
