const express = require("express");
const Router = express.Router();
const User = require("../model/user");
const joint_account_login_token=require("../model/joint_account_login_token.js")
const validate_verify_login_code = require("../validation/validate_verify_login_code.js");
const verifyToken = require("../token/verifyToken.js");
const genToken = require("../token/genToken");


Router.post("/", async (req, res) => {
try {
    
    const request_isvalid = validate_verify_login_code(req.body);
    if (request_isvalid != true)
      return res.status(400).json({ error: true, errMessage: request_isvalid });

      const primary_email_code=await joint_account_login_token.findOne({user:req.body.user, token:req.body.primary_email_code})
 console.log(primary_email_code)
      if(!primary_email_code)return res.status(400).json({error:true,errMessage:"Invalid Primary Email code, please retry again"})

      const secondary_email_code=await joint_account_login_token.findOne({user:req.body.user, token:req.body.secondary_email_code})

      if(!secondary_email_code)return res.status(400).json({error:true,errMessage:"Invalid Secondary Email code, please retry again"})


      await joint_account_login_token.findByIdAndDelete(primary_email_code._id)
      await joint_account_login_token.findByIdAndDelete(secondary_email_code._id)

      const token = genToken(req.body.user);
      res.status(200).json({error:false, token})

} catch (error) {
    res.status(400).json({error:true,errMessage:error.message})
}

})
module.exports=Router