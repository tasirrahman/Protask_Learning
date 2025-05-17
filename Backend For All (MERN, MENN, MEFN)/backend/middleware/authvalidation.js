const Joi = require('joi');

const emailSchema = Joi.string()
  .email({ tlds: { allow: false } })
  .required()
  .messages({
    'string.empty': 'Email is required.',
    'string.email': 'Please provide a valid email address.',
  });

const passwordSchema = Joi.string()
  .min(6)
  .required()
  .messages({
    'string.empty': 'Password is required.',
    'string.min': 'Password must be at least 6 characters long.',
  });

const signinJoiSchema = Joi.object({
  email: emailSchema,
  password: passwordSchema,
});

const signupJoiSchema = Joi.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Passwords do not match.',
      'string.empty': 'Confirm password is required.',
    }),
});

const forgotPasswordJoiSchema = Joi.object({
  email: emailSchema,
  password: passwordSchema,
});

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorMessages });
  }

  next();
};

module.exports = {
  signinSchema: validate(signinJoiSchema),
  signupSchema: validate(signupJoiSchema),
  forgotPasswordSchema: validate(forgotPasswordJoiSchema),
};
