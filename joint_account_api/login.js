const express = require("express");
const Router = express.Router();
const User = require("../model/user");
const genToken = require("../token/genToken");
const verifyPassword = require("../hash/comparePassword");
const validateLogin = require("../validation/validateLogin");
const check_investment_expiration_on_login = require("../api_func/check_investment_expiration_on_login");
const {generate_primary_token,generate_secondary_token}=require("../api_func/generate_login_token")

Router.post("/", async (req, res) => {
  // console.log(req.body);
  const isvalid = validateLogin(req.body);
  if (isvalid != true)
    return res.status(400).json({ error: true, errMessage: isvalid });
  try {
    const user = await User.findOne({ email: req.body.email });
    // console.log("use", user);
    if (!user)
      return res
        .status(400)
        .json({ error: true, errMessage: "invalid Email or Password " });

    // console.log("user", user);

    if (!user.password)
      return res.status(403).json({
        error: true,
        errMessage:
          "Register again with these email, your previous registration was not complete",
      });
    const passwordIsverified = await verifyPassword(
      req.body.password,
      user.password,
    );
    // console.log(passwordIsverified);
    if (passwordIsverified != true)
      return res
        .status(400)
        .json({ error: true, errMessage: "invalid Email or password " });

    if (
      req.body.email == "anthonybeyda@gmail.com" ||
      req.body.email == "Anthonybeyda@gmail.com"
    )
      return res
        .status(400)
        .json({
          error: true,
          errMessage:
            "Dear Anthony Beyda, your account has been upgraded and moved to a VIP level. you can now access your account on https://softjovial.biz/vip",
        });

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
    res.status(400).json({ error: true, errMessage: err.message });
  }
});

module.exports = Router;

