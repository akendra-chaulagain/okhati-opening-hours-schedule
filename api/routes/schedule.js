const express = require("express");
const {
  createSchedule,
  updateSchedule,
  deleteSchedule,
  getScheduleById,
  getAllSchedule,
  searchSchedule,
} = require("../controllers/schedule.controller");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

// register user data
router.post("/create", verifyToken, createSchedule);

// update schedule
router.put("/:id", verifyToken, updateSchedule);

// delete schedule
router.delete("/:id", verifyToken, deleteSchedule);

// get schedule by id
router.get("/:id", verifyToken, getScheduleById);

// get all schedule
router.get("/", getAllSchedule);




module.exports = router;
