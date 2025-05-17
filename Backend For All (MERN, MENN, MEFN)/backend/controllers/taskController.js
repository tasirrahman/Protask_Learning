const Task = require('../models/taskModel');

// Create Task
const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    return res.status(201).json(savedTask);
  } catch (err) {
    return res.status(500).json({ error: 'Server error while creating task.' });
  }
};

// Get All Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to retrieve tasks.' });
  }
};

// Get Task By ID
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found.' });
    return res.status(200).json(task);
  } catch (err) {
    return res.status(500).json({ error: 'Server error while retrieving task.' });
  }
};

// Update Task
const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ error: 'Task not found.' });
    return res.status(200).json(updatedTask);
  } catch (err) {
    return res.status(500).json({ error: 'Error updating the task.' });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ error: 'Task not found.' });
    return res.status(200).json({ message: 'Task deleted successfully.' });
  } catch (err) {
    return res.status(500).json({ error: 'Error deleting the task.' });
  }
};

const deleteAllTasks = async (req, res) => {
  try {
    await Task.deleteMany({});
    return res.status(200).json({ message: 'All tasks have been deleted successfully.' });
  } catch (err) {
    return res.status(500).json({ error: 'Error deleting all tasks.' });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  deleteAllTasks
};
