const express = require("express");
const {
  getTask,
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controller/taskController");
const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
