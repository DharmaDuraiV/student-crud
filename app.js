const express = require("express");
const studentRoute = require("./routes/student.route");
const cors = require("cors");

const app = express();

app.use(cors());

//* parse the json data
app.use(express.json());

//* application logics

app.use("/api/v1/students", studentRoute);

module.exports = app;
