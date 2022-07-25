import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSchedule } from "../../redux/apicalls";
import "./CreateSedule.css";

const CreateSedule = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    createSchedule(dispatch, { weeks: { date, day, time, status } });
  };

  return (
    <>
      <div className="container mt-5 pt-5 createSchedule">
        <h2>Create Schedule</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => setDate(e.target.value)}
              name="date"
              required
            />
          </div>
          <div className="mb-3 selectOption">
            <label className="form-label">Day</label>
            <br />
            <select
              required
              onChange={(e) => setDay(e.target.value)}
              name="day"
            >
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>

          {/* time */}
          <div className="mb-3">
            <label className="form-label">Time</label>
            <input
              type="text"
              className="form-control"
              name="time"
              required
              placeholder="9:00 am - 4:00 pm"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {/* status */}
          <div className="mb-3 selectOption">
            <label className="form-label">Status</label>
            <br />
            <select onChange={(e) => setStatus(e.target.value)} name="status">
              <option value="Opened">Opened</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleCreate}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateSedule;
