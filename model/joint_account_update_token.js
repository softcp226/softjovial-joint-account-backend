const connectDB = require("./dbConnector");
const mongoose = require("mongoose");
const user = require("./user");


const joint_account_token_Schema=mongoose.Schema({
  email: {
    type:String,
    required: true,
  },

  
    token: {
      type: Number,
      required: true,
      
    },
  });

 const joint_account_token= mongoose.model("joint_account_token",joint_account_token_Schema )
 module.exports=joint_account_token