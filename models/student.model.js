const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  studentname: String,
  age: Number,
  dob: Date,
  isCompleted: Boolean,
  description: String,
});

const Student = model("students", studentSchema);

module.exports = Student;
