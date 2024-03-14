const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://pansanijoaomendonca:mOmHkbwCMqisxGsV@nodeexpressprojects.b9auenn.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProjects";

mongoose
  .connect(connectionString)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));
