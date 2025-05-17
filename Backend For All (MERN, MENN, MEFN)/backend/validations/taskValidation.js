const Joi = require('joi');
const mongoose = require('mongoose');

const isObjectId = (value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.error('any.invalid');
  }
  return value;
};

const taskSchema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().trim().optional(),
  priority: Joi.string().valid('Low', 'Medium', 'High').default('Medium'),
  due_date: Joi.date().required(),
  status: Joi.string().valid('To Do', 'In Progress', 'Completed').default('To Do'),
});

module.exports = { taskSchema };
