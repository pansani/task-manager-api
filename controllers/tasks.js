const getAllTasks = (req, res) => {
  res.send("All tasks");
};

const createNewTask = (req, res) => {
  res.json(req.body);
};

const getSpecificTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = {
  getAllTasks,
  createNewTask,
  getSpecificTask,
  deleteTask,
  updateTask,
};
