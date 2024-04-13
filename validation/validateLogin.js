const Joi=require("joi")

const validateLogin=(req)=>{
const schema=Joi.object({
    primary_email:Joi.string().email().required().max(1000),
    primary_password:Joi.string().required().max(1000),
   secondary_password:Joi.string().required().max(1000)

})

const result=schema.validate({primary_email:req.primary_email,primary_password:req.primary_password,secondary_password:req.secondary_password})
if(result.error)return result.error.message
return true
}

module.exports=validateLogin


