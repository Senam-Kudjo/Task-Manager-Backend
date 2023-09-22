const asyncHandler = require("express-async-handler");
const Task = require("../model/taskModel");

const getTasks = asyncHandler(async (req, res) => {
  const task = await Task.find();
  res.status(200).json(task);
});

const createTask = asyncHandler(async (req, res) => {
  const { name, completed } = req.body;
  if (!name) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    res.status(200).json(task);
  }
  res.status(404);
  throw new Error(`There is no task with ID:${req.params.id}`);
});

const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    res.status(404);
    throw new Error(`There is no task with ID:${req.params.id}`);
  }
  res.status(200).json(task);
});

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findByIdAndRemove(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error(`There is no task with ID:${req.params.id}`);
  }
  res.status(200).json({ message: "This data has just been deleted", task });
});

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
