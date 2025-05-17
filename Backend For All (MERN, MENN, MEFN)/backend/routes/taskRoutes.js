const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { taskSchema } = require('../validations/taskValidation');
const validateRequest = require('../middlewares/validateRequest');

// Task Routes
router.post('/create', validateRequest(taskSchema), taskController.createTask);
router.get('/read', taskController.getAllTasks);
router.get('/read/:id', taskController.getTaskById);
router.put('/update/:id', validateRequest(taskSchema), taskController.updateTask);
router.delete('/delete/:id', taskController.deleteTask);
router.delete('/delete', taskController.deleteAllTasks);

module.exports = router;
