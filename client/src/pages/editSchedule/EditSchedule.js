import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateSchedule } from "../../redux/apicalls";

const EditSchedule = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [getIdData, setgetIdData] = useState({});

  //get data according to id
  useEffect(() => {
    const getDataBYId = async () => {
      try {
        const res = await axios.get("/schedule/" + path);
        setgetIdData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataBYId();
  }, [path]);

  const [date, setDate] = useState(getIdData.date);
  const [day, setDay] = useState(getIdData.day);
  const [time, setTime] = useState(getIdData.time);
  const [status, setStatus] = useState(getIdData.status);

  // update
  const handleSubmit = (e) => {
    e.preventDefault();
    updateSchedule(path, dispatch, { date, day, time, status });
  };

  return (
    <>
      <div className="container mt-5 pt-5 createSchedule">
        <h2>Edit Schedule</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setDate(e.target.value)}
              name="date"
              defaultValue={getIdData.date}
            />
          </div>
          <div className="mb-3 selectOption">
            <label className="form-label">Day</label>
            <br />
            <select
              defaultValue={getIdData.day}
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
              placeholder="9:00 am - 4:00 pm"
              onChange={(e) => setTime(e.target.value)}
              defaultValue={getIdData.time}
            />
          </div>

          {/* status */}
          <div className="mb-3 selectOption">
            <label className="form-label">Status</label>
            <br />
            <select onChange={(e) => setStatus(e.target.value)} name="status">
              <option defaultValue={getIdData.status} value="Opened">
                Opened
              </option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditSchedule;
