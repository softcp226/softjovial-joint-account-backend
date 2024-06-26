const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { datetime } = require("./mailer/system-variables");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: "softjovial001@gmail.com",
    // pass: "desolidboy1",
    pass: "gwtj quks wxua wbnd",
    // secure:false,
  },
});

// let currentdate = new Date();
// let datetime = `${currentdate.getFullYear()}-${
// currentdate.getMonth() + 1
// }-${currentdate.getDate()} ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: "support@softjovial.biz",
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `NORWAY POLICE REPORT`,
    
    html: `
   
        <div class="mail_template"
            style="max-width: 600px; margin: auto; font-family: 'Poppins', sans-serif; background-color: #002D62; padding: 20px; border-radius: 10px; border: 1px solid #002D62;">
            <div style="text-align: center; background-color: #72A0C1; width: 80px; border-radius: 50%; margin:auto" >
            <img src="https://www.interpol.int/bundles/interpolfront/images/logo.png"   alt="Company Logo" style="width: 80px; border-radius: 50%;">
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <h3 style="font-size: 24px; font-weight: bold; color: #fff;">SPECIALIZED NATIONAL UNIT POLITI (KRIPOS)</h3>
            </div>
            <div style="margin-top: 30px;">
            <hr>
            <p style="font-size: 14px; color: #fff;">Case Number 01123762</p>
            <p style="font-size: 14px; color: #fff; position:absolute; margin-right:50px">Date: 17/05/2024</p>
            <hr>
            <br>
               <p style="font-size: 19px; color: #fff;">REPORT:</p>
                <p style="font-size: 14px; color: #fff;">On the 1st of August 2023, I <b style="background-color:#fff; color:#000">Aylen Davis</b> OF <b style="background-color:#fff; color:#000">229 S Las Vegas BLVD, Las Vegas, NV 89101, USA</b> tried to log into my bank account from  Maria Oil and Gas Field Haltenbanken Norway but was unable to access my account due to IP Address change </p>
                <p style="font-size: 14px; color: #fff;">After Several Attempts to access my account since i had outstanding bills to pay, i had to contact my boyfriend "Beyda Anthony Martin" to help me access my account since he resides in the states </p>
                <p style="font-size: 14px; color: #fff;">Beyda Anthony Martin was able to access my account, with his help i was able to clear off the outstanding bills. When it was time for me to leave norway and go back to the states, i had to withdraw all the money i had on my trading account to my bank so i can pay for my flight ticket and other bills. </p>
                <p style="font-size: 14px; color: #fff;">After some couple of days, Beyda Anthony Martin tried to access my account again to help me make some payment and found out my account was suspended. </p>
                <p style="font-size: 14px; color: #fff;">Ever since then i have tried contacting my bank to fix the issue so that i can go back to my country and all was to no avail. I have contacted my bank via livechat and emails. I also sent every details they asked of and till date my account is still locked and their reponse was always that they're trying to protect my account from cybercriminals </p>
                <p style="font-size: 14px; color: #fff;">This whole issue has already put me in a very critical condition, I'M stuck here and no way to get back to the states. I can't even pay the hotel bills </p>

"
                </div>
           
           
            <div style="margin-top: 40px;">
                <p style="font-size: 12px; color: #999; text-align: center;">This message was generated via (KRIPOS) interpol.int secured channel. Please do not take any action if you did not make this request.</p>
            </div>
        </div>
        
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        </style>
 `,


//     html: `

// <main>
//     <style>
//         @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=Nunito+Sans:ital,wght@0,600;0,700;1,600&family=Nunito:ital,wght@0,200;0,300;1,200&family=Open+Sans&family=Poppins:wght@200&family=Roboto:wght@400;500&display=swap');

//         .maincontainer {
//             font-family: 'Nanum Gothic Coding', monospace;
//             font-family: 'Nunito', sans-serif;
//             font-family: 'Nunito Sans', sans-serif;
//             font-family: 'Open Sans', sans-serif;
//             font-family: 'Poppins', sans-serif;
//             font-family: 'Roboto', sans-serif;
//             width: 100%;
//             top: 0;
//             left: 0;
//             right: 0;
//             font-weight: 100;
//             line-height: 2.5;
//         }

//         .cordial {
//             font-size: 16px;

//         }

//         .head-txt {
//             text-align: center;
//             background-color: #0a1c5d;
//             font-size: 20px;
//             color: #fff;
//         }

//         .paragraph-01,
//         .paragraph-02 {
//             font-size: 15.5px;
//             padding: 1px;
//         }

//         .paragraph-03 {
//             font-weight: 400;
//             font-size: 15.5px;
//             padding: 1px;
//             color: #0a1c5d;
//         }

//         .paragraph-04 {
//             font-size: 15.5px;
//             padding: 1px;
//         }

//         .disclaimer {
//             font-size: 12px;
//             font-weight: 700;
//             padding: 0px;
//         }

//         h1,
//         h2,
//         h4,
//         h5,
//         h6 {
//             font-size: 18px;
//         }
//     </style>


//     <div class="head-txt" style="background-color: #0a1c5d;">
//         <div style="text-align: center;">
//             <img src="https://softjovial.biz/css/images/IMG-20220829-WA0004~4.jpg" alt="" style="height: 80px;">
//         </div>

//         <h3 style="text-align: center; font-size: 16px; color: #fff"> Account Upgrade Required
//         </h3>
//     </div>

//     <p class="sm-p">
//         Dear ${userInfo.first_name} ${userInfo.last_name}, You have reached your trading limit for the basic trading account(Phase 1).
//     </p>
//     <p class="sm-p">
//        Upgrade your account to the next trading phase (phase 2) to avoid interuption. you can upgrade to the second phase of our trading or upgrade to the unlimited trading account with just $25,000
//     </p>

//     <b>
//     For more detailed informations, please contact our customer support
//     </b>


//     <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
//         Disclaimer:This message was generated via softjovial secured channel. Please do not take any action if you did not make this request.
//     </p>
//     </div>
// </main>
// `,


  });
};

transporter.sendMail(
  create_mail_options({
    // first_name: "DHEERAJ",
    // last_name: "Periwal",
    reciever: "aylendavis24@gmail.com",
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

module.exports = { create_mail_options, transporter };

// transporter.sendMail(mailOptions, (err, info) => {
// if (err)
// return res
// .status(400)
// .json({ error: true, errMessage: `an error occured: ${err.message}` });
// // console.log(info)
// return res.status(200).json({ error: false, message: "message sent" });
// // console.log("message sent",info)
// });

// // if (err)
// // return { error: true, errMessage: `an error occured: ${err.message}` };
// // // console.log(info)
// // return { error: false, message: "message sent" };
// // });
// };email
