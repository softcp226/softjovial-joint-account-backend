const Joi = require("joi");

const validate_user = (req) => {
  const schema = Joi.object({
    user:Joi.string().required().max(1000),
    primary_full_name: Joi.string().required().max(1000),
    secondary_full_name: Joi.string().required().max(1000),

    primary_password: Joi.string().required().max(1000),
    secondary_password: Joi.string().required().max(1000),

  });
  const result = schema.validate({
    user:req.user,
    primary_full_name: req.primary_full_name,
    secondary_full_name: req.secondary_full_name,
    primary_password: req.primary_password,
    secondary_password:req.secondary_password
  });
  if (result.error) return result.error.message;
  return true;
};
module.exports = validate_user;
