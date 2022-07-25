const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  weeks: [
    {
      date: {
        type: String,
        required: true,
      },
      day: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
    },
  ],
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
