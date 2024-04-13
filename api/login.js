const express = require("express");
const Router = express.Router();
const User = require("../model/user");
const genToken = require("../token/genToken");
const verifyPassword = require("../hash/comparePassword");
const validateLogin = require("../validation/validateLogin");
const check_investment_expiration_on_login = require("../api_func/check_investment_expiration_on_login");
const {generate_primary_token,generate_secondary_token}=require("../api_func/generate_login_token")
const {
  create_mail_options,
  transporter,
} = require("../mailer/joint_account_login_code");


Router.post("/", async (req, res) => {
  console.log(req.body);
  const isvalid = validateLogin(req.body);
  if (isvalid != true)
    return res.status(400).json({ error: true, errMessage: isvalid });
  try {
    const user = await User.findOne({ primary_email: req.body.primary_email });
    // console.log("use", user);
    if (!user)
      return res
        .status(400)
        .json({ error: true, errMessage: "invalid Primary Email or Password " });

    // console.log("user", user);

    if (!user.primary_password)
      return res.status(403).json({
        error: true,
        errMessage:
          "Register again with these email, your previous registration was not complete",
      });


    const verify_primary_password = await verifyPassword(
      req.body.primary_password,
      user.primary_password,
    );

    const verify_secondary_password = await verifyPassword(
      req.body.secondary_password,
      user.secondary_password,
    );
    // console.log(passwordIsverified);
    if (verify_primary_password != true)
      return res
        .status(400)
        .json({ error: true, errMessage: "invalid Primary  or Secondary password " });

        if (verify_secondary_password != true)
        return res
          .status(400)
          .json({ error: true, errMessage: "invalid Primary  or Secondary password " });


const primary_code=await generate_primary_token(user._id)
const secondary_code=await generate_secondary_token(user._id)

          transporter.sendMail(
            create_mail_options({
              full_name: user.primary_full_name,
             code: primary_code,
              reciever: user.primary_email,
            }),
            (err, info) => {
              if (err) return "console.log(err.message);"
            },
          );
      
          transporter.sendMail(
            create_mail_options({
              full_name: user.secondary_full_name,
              code:secondary_code,
              reciever: user.secondary_email,
            }),
            (err, info) => {
              if (err) return "console.log(err.message);"
            },
          );

    const token = genToken(user._id);

    const check_inv_exp_result = await check_investment_expiration_on_login(
      user._id,
    );
    // console.log(await check_inv_exp_result);

    res.status(200).json({
      error: false,
      message: { user: user._id, account_type:user.last_login },
      token,
    });
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: true, errMessage: err.message });
  }
});

module.exports = Router;

