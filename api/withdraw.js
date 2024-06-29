const express = require("express");
const Router = express.Router();
const User = require("../model/user");
const verifyToken = require("../token/verifyToken");
const validate_withdrawal = require("../validation/validate_withdrawal");
const Withdrawal_request = require("../model/withdrawal_request");
const { create_mail_options, transporter } = require("../mailer/withdrawal");
const create_withdrawal_transaction = require("../shape-model/create-withdrawal-transaction");

Router.post("/", verifyToken, async (req, res) => {
  const request_isvalid = validate_withdrawal(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });
  try {
    const user = await User.findById(req.body.user);
    if (!user)
      return res.status(404).json({
        error: true,
        errMessage: "invalid request, please login again to make a withdrawal",
      });

    if (parseInt(req.body.withdrawal_amount) > user.final_balance)
      return res.status(400).json({
        error: true,
        errMessage:
          "Insufficient fund, please deposit more fund or cancel investment if  it exist to be able to withdraw fund",
      });

    // if (user.has_made_deposit !== true)
    //   return res.status(400).json({
    //     error: true,
    //     errMessage:
    //       "To make a withdrawal of your money or registration bonus , you need to atleast make a first deposit",
    //   });

    //  if (parseInt(req.body.withdrawal_amount) < 1500)
    //    return res.status(400).json({
    //      error: true,
    //      errMessage:
    //        "You have exceeded your trading limit for the basic plan, please deposit atleast $1,500 into your account to continue trading/withdrawal on the premium plan",
    //    });


    user.set({
      final_balance: user.final_balance - parseInt(req.body.withdrawal_amount),
    });
    let currentdate = new Date();
    let datetime = `${currentdate.getFullYear()}-${
      currentdate.getMonth() + 1
    }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

    withdrawal_transaction=await create_withdrawal_transaction(req);
    // console.log("withdrawal request result",withdrawal_transaction)

    const withdrawal_request = await new Withdrawal_request({
      user: req.body.user,
      transaction_date: datetime,
      withdrawal_amount: req.body.withdrawal_amount,
      withdrawal_method: req.body.withdrawal_method,
      wallet: req.body.wallet,
      transaction:withdrawal_transaction._id
    });


    await user.save();
    await withdrawal_request.save();
    
    // transporter.sendMail(
    //   create_mail_options({
    //     first_name: user.first_name,
    //     last_name: user.last_name,
    //     reciever: user.email,
    //     amount: req.body.withdrawal_amount,
    //   }),
    //   (err, info) => {
    //     if (err) return "console.log(err.message);"
    //     // console.log(info);
    //     // return res.status(400).json({
    //     //   error: true,
    //     //   errMessage: `Encounterd an error while trying to send an email to you: ${err.message}, try again`,
    //     // });
    //   }
    // );


    transporter.sendMail(
      create_mail_options({
        full_name: user.primary_full_name,
        reciever: user.primary_email,
        amount:req.body.withdrawal_amount
      }),
      (err, info) => {
        if (err) return "console.log(err.message);"
      },
    );

    transporter.sendMail(
      create_mail_options({
        full_name: user.secondary_full_name,
        reciever: user.secondary_email,
        amount:req.body.withdrawal_amount
      }),
      (err, info) => {
        if (err) return "console.log(err.message);"
      },
    );



    res.status(200).json({
      error: false,
      message: "you successfully initiated a withdrawal",
    });
  } catch (error) {
    // console.log(error);
    res.status(200).json({ error: true, errMessage: error.message });
  }
});
module.exports = Router;


