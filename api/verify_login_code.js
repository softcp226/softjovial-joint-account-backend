const express = require("express");
const Router = express.Router();
const User = require("../model/user");
const joint_account_login_token=require("../model/joint_account_login_code.js")
const validate_verify_login_code = require("../validation/validate_verify_login_code.js");
const verifyToken = require("../token/verifyToken.js");


Router.post("/", verifyToken, async (req, res) => {

try {
    
    const request_isvalid = validate_verify_login_code(req.body);
    if (request_isvalid != true)
      return res.status(400).json({ error: true, errMessage: request_isvalid });

      const primary_email_code=await joint_account_login_token.find({user:req.body.user, token:req.body.})

} catch (error) {
    res.status(400).json({error:true,errMessage:error.message})
}

})
module.exports=Router