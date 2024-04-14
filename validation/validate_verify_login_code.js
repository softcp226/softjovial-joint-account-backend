const Joi = require("joi");

const validate_verify_login_code = (req) => {
  const schema = Joi.object({
    user:Joi.string().required().max(1000),
    primary_email_code:Joi.string().required().max(1000),
    secondary_email_code:Joi.string().required().max(1000),


  });
  const result = schema.validate({
    user:req.user,
    primary_email_code:req.primary_email_code,
    secondary_email_code:req.secondary_email_code
  });
  if (result.error) return result.error.message;
  return true;
};
module.exports = validate_verify_login_code;
