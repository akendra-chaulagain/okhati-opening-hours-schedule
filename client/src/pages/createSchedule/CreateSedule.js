import React from "react";
import "./CreateSedule.css";

const CreateSedule = () => {
  return (
    <>
      <div className="container mt-5 pt-5 createSchedule">
      <h2>Create Schedule</h2>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Date
            </label>
            <input
              type="date"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 selectOption">
            <label for="exampleInputPassword1" class="form-label">
              Day
            </label>
            <br />
            <select name="" id="">
              <option value="">Sunday</option>
              <option value="">Sunday</option>
              <option value="">Sunday</option>
              <option value="">Sunday</option>
              <option value="">Sunday</option>
              <option value="">Sunday</option>
              <option value="">Sunday</option>
            </select>
          </div>

          {/* time */}
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Time
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          {/* status */}
          <div class="mb-3 selectOption">
            <label for="exampleInputEmail1" class="form-label">
              Status
            </label>
            <br />
            <select name="" id="">
              <option value="">Sunday</option>
              <option value="">Sunday</option>
              <option value="">Sunday</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateSedule;
