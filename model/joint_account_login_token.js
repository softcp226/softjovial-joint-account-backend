const connectDB = require("./dbConnector");
const mongoose = require("mongoose");
const user = require("./user");


const joint_account_token_Schema=mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },

    token: {
      type: Number,
      required: true,
      
    },
  });

 const joint_account_token= mongoose.model("joint_account_login_token",joint_account_token_Schema )
 module.exports=joint_account_token