import React from "react";
import "./Table.css";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <>
      <div className="container">
        <div className="tableTitle">
          <h2>Schedule Table</h2>
          <Link to="/create-schedule">
            <button>Create Schedule</button>
          </Link>
        </div>
        <hr />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Day</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td className="action_wrapper">
                <button>edit</button>
                <button>delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
