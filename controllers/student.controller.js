const Student = require("../models/student.model");

exports.createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json({
    status: "success",
    data: student,
  });
};

exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json({
    status: "success",
    data: students,
  });
};

exports.getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: student,
  });
};

exports.updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    status: "success",
    data: student,
  });
};

exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
  });
};
