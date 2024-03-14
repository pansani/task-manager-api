const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createNewTask,
  deleteTask,
  getSpecificTask,
  updateTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks);

router.route("/").post(createNewTask);

router.route("/:id").get(getSpecificTask);

router.route("/:id").delete(deleteTask);

router.route("/:id").patch(updateTask);

module.exports = router;
