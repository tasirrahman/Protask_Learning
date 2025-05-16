const Joi = require('joi');

const authValidationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required.',
      'string.email': 'Please provide a valid email address.',
    }),

  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.empty': 'Password is required.',
      'string.min': 'Password must be at least 6 characters long.',
    }),
});

const validateAuth = (req, res, next) => {
  const { error } = authValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }
  next();
};

module.exports = validateAuth;
