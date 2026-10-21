const express = require("express");
const studentController = require("../controllers/student.controller");

const router = express.Router();

// router.get("/", studentController.getStudents);
// router.post("/", studentController.createStudent);

// router.get("/:id", studentController.getStudent);
// router.patch("/:id", studentController.updateStudent);
// router.delete("/:id", studentController.deleteStudent);


router
  .route("/")
  .get(studentController.getStudents)
  .post(studentController.createStudent);


router
  .route("/:id")
  .get(studentController.getStudent)
  .patch(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = router;
