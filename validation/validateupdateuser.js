const Joi = require("joi");

const validateupdateUser = (req) => {
  const Schema = Joi.object({
    user: Joi.string().required(),
    primary_full_name: Joi.string().required(),
    secondary_full_name: Joi.string().required(),
    primary_phone_number: Joi.string().required(),
    secondary_phone_number: Joi.string().required(),
  }).options({ stripUnknown: true });
  const result = Schema.validate({
    user: req.user,
    primary_full_name: req.primary_full_name,
    secondary_full_name:req.secondary_full_name,
    primary_phone_number: req.primary_phone_number,
    secondary_phone_number: req.secondary_phone_number,
  });

  if (result.error) return result.error.message;
  return true;
};

module.exports = validateupdateUser;
