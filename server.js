const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/connectionDb");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;
// const eae = require("express-async-errors");

connectDb();
app.use(express.json());
app.use("/api/task/", require("./routes/taskRoute"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
