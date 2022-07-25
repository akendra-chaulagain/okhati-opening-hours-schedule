// database
require("../connection/DB");

// import Schedule model
const Schedule = require("../models/Schedule");

// create Schedule
const createSchedule = async (req, res) => {
  const day = req.body.day;
  const date = req.body.date;
  const time = req.body.time;
  const status = req.body.status;
  const weeks = req.body.weeks;
  // creating new Schedule
  try {
    const createSchedule =  Schedule({ $push: { weeks } });
    const result = await createSchedule.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(`Unablt to create Schedule  ${err}`);
    next(err);
  }
};

// update Schedule
const updateSchedule = async (req, res, next) => {
  try {
    const updateSchedule = await Schedule.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updateSchedule);
  } catch (error) {
    res.status(500).json(`Unablt to update   Schedule ${error}`);
    next(error);
  }
};

// delete Schedule
const deleteSchedule = async (req, res, next) => {
  try {
    const deleteSchedule = await Schedule.findByIdAndDelete(req.params.id);
    res.status(201).json(deleteSchedule);
  } catch (error) {
    res.status(500).json(`Unablt to delete   Schedule ${error}`);
    next(error);
  }
};

// find by id
const getScheduleById = async (req, res, next) => {
  try {
    const getAccordingToId = await Schedule.findById(req.params.id);
    res.status(201).json(getAccordingToId);
  } catch (error) {
    res.status(500).json(`Unablt to get   Schedule ${error}`);
    next(error);
  }
};

const getAllSchedule = async (req, res, next) => {
  const qday = req.query.day;
  try {
    let schedule;
    if (qday) {
      schedule = await Schedule.find({
        day: {
          //   $in: [qday],
          $regex: qday,
          $options: "i",
        },
      });
    } else {
      schedule = await Schedule.find().sort({ _id: -1 });
    }
    res.status(201).json(schedule);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSchedule,
  updateSchedule,
  getAllSchedule,
  getScheduleById,
  deleteSchedule,
};
