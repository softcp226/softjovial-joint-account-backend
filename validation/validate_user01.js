const Joi = require("joi");

const validate_user01 = (req) => {
  const schema = Joi.object({
    primary_email: Joi.string().email().required().max(1000),
    secondary_email: Joi.string().email().required().max(1000),
    primary_phone_number: Joi.string().required().max(1000),
    secondary_phone_number: Joi.string().required().max(1000),
    referral: Joi.string().allow(""),
  });

  const result = schema.validate({
    primary_email: req.primary_email,
    secondary_email:req.secondary_email,
    primary_phone_number:req.primary_phone_number,
    secondary_phone_number:req.secondary_phone_number,
        referral: req.referral,
  });
  if (result.error) return result.error.message;
  return true;
};

module.exports = validate_user01;
