const Joi = require('joi');

const idSchema = Joi.string()
  .length(24)
  .hex()
  .required()
  .messages({
    'string.base': 'ID must be a string.',
    'string.length': 'ID must be a 24-character hexadecimal string.',
    'string.hex': 'ID must be a valid hexadecimal format.',
    'any.required': 'Note ID is required.',
  });

const titleSchema = Joi.string()
  .min(3)
  .max(100)
  .required()
  .messages({
    'string.empty': 'Title is required.',
    'string.min': 'Title must be at least 3 characters.',
    'string.max': 'Title must not exceed 100 characters.',
  });

const prioritySchema = Joi.number()
  .integer()
  .min(1)
  .max(5)
  .required()
  .messages({
    'number.base': 'Priority must be a number.',
    'number.integer': 'Priority must be an integer.',
    'number.min': 'Priority must be at least 1.',
    'number.max': 'Priority must not exceed 5.',
    'any.required': 'Priority is required.',
  });

const emailSchema = Joi.string()
  .email({ tlds: { allow: false } })
  .required()
  .messages({
    'string.empty': 'Email is required.',
    'string.email': 'Please provide a valid email address.',
  });

const noteSchema = Joi.string()
  .min(5)
  .max(1000)
  .required()
  .messages({
    'string.empty': 'Note content is required.',
    'string.min': 'Note must be at least 5 characters.',
    'string.max': 'Note must not exceed 1000 characters.',
  });

const timestampSchema = Joi.date()
  .required()
  .messages({
    'date.base': 'Timestamp must be a valid date.',
    'any.required': 'Timestamp is required.',
  });

const createNoteSchema = Joi.object({
  title: titleSchema,
  priority: prioritySchema,
  email: emailSchema,
  note: noteSchema,
  timestamp: timestampSchema,
});

const getNoteByIdSchema = Joi.object({
  id: idSchema,
});

const updateNoteSchema = Joi.object({
  id: idSchema,
  title: Joi.string().min(3).max(100).optional(),
  priority: Joi.number().integer().min(1).max(5).optional(),
  email: Joi.string().email({ tlds: { allow: false } }).optional(),
  note: Joi.string().min(5).max(1000).optional(),
  timestamp: Joi.date().optional(),
})
  .or('title', 'priority', 'email', 'note', 'timestamp')
  .messages({
    'object.missing': 'At least one field must be provided for update.',
  });

const deleteNoteSchema = Joi.object({
  id: idSchema,
});

const getNoteSchema = Joi.object({});

const validate = (schema, source = 'body') => (req, res, next) => {
  const data = req[source];
  const { error } = schema.validate(data, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorMessages });
  }

  next();
};

module.exports = {
  validateCreateNote: validate(createNoteSchema),
  validateGetNoteById: validate(getNoteByIdSchema, 'params'),
  validateUpdateNote: validate(updateNoteSchema),
  validateDeleteNote: validate(deleteNoteSchema, 'params'),
  validateGetNote: validate(getNoteSchema, 'query'),
};
