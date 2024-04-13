// const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzczNDJiNTYyYzJjYjllY2U1MmE2ZWYiLCJpYXQiOjE2NjkxMjEzMzR9.HeJVUUQceXlkSR-LabGrxQo9hiNrBMDS15E6ApdM0tk";

// const fetch = require("isomorphic-fetch");

// const fetchTest = async (data) => {
//   const response = await fetch(
//     "http://localhost:3000/api/user/create_investment",
//     {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(data),
//     },
//   );
//   const result = await response.json();
//   console.log(result);
// };
// fetchTest({
//   token,
//   user: "637342b562c2cb9ece52a6ef",
//   investment_amount: 100,
//   investment_plan: "Basic Plan",
//   return_time: "daily_return",
//   profit:5,
// });

const nodemailer = require("nodemailer");
require("dotenv").config();

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
console.log({
  user: process.env.company_mail,
  pass: process.env.mail_password,
});

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
    subject: `Payment Received`,
    //   text:"just wanna know if this works",
    html: `
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
  rel="stylesheet"
/>
<main
  style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  "
>
  <div class="maincontainer"  style="
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-image: url(https://edustair.com/assets/img/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg);
    width: 100%;
    background-size: cover;
  ">
    <div class="head-txt">
      <h1 style="text-align: center; font-size: 16px; color: #825ee4">
        SOFTJOVIAL.COM
      </h1>
      <h3 style="font-size: 15px">Payment Received</h3>
    </div>

    <p class="sm-p">
    Dear Marcus Jude,
    A Total payment of $246 has been received by market makers using your email as the primary source of payment.
    
    </p>
    You still need a total of $150 to clear your outstanding fee of $396 which was placed on your account.
    <p>
    
    </p>

    <p class="sm-p">
      Note: there was an issue with market makers mail server we were notified about this payment
    </p>
    <br />
   <h1
      style="
        font-size: 18px;
        text-align: center;
        background: #eee;
        color: #0c0e28;
      "
    >
      SOFTJOVIAL.BIZ
    </h1>
    <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
      Disclaimer: this message was automatically generated via softjovial
      secured channel,please do not reply to this message all correspondence
      should be addressed to softjovial.biz or your relationship officer
    </p>
  </div>
</main>

 `,
  });
};
module.exports = { create_mail_options, transporter };

transporter.sendMail(
  create_mail_options({
    // first_name: "Chidera",
    // last_name: "Nwofe",
    reciever: "	muhumuzamarcusjude@gmail.com",
  }),
  (err, info) => {
    if (err) return console.log(err);
    console.log(info);
    // return res.status(400).json({
    // error: true,
    // errMessage: `Encounterd an error while trying to send an email to you: ${err.message}, try again`,
    // });
  },
);

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
