import React, { useEffect } from "react";
import "./Table.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteSchedule, getAllSchedule } from "../../redux/apicalls";

const Table = () => {
  // get allproduct using redux from api call
  const dispatch = useDispatch();
  const allSchedule = useSelector((state) => state.schedule.schedules);
  console.log(allSchedule);

  const user = useSelector((state) => state.user.currentUser);

  // const ak = useSelector();
  useEffect(() => {
    getAllSchedule(dispatch);
  }, [dispatch]);

  // delete
  const handleDelete = (id) => {
    deleteSchedule(dispatch, id);
  };

  return (
    <>
      <div className="container">
        <div className="tableTitle">
          <h2>Schedule Table</h2>
          {user ? (
            <>
              <Link to="/create-schedule">
                <button>Create Schedule</button>
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
        <hr />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Day</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
              {user ? (
                <>
                  <th scope="col">Action</th>
                </>
              ) : (
                <></>
              )}
            </tr>
          </thead>

          {/* {allSchedule.map((item, id) => (
            
            <tbody key={id}>
              <tr>
                <th>{item.weeks.day}</th>
                {user ? (
                  <>
                    <td className="action_wrapper">
                      <Link to={`/edit-schedule/${item._id}`}>
                        <button>edit</button>
                      </Link>
                      <button onClick={() => handleDelete(item._id)}>
                        delete
                      </button>
                    </td>
                  </>
                ) : (
                  <></>
                )}
              </tr>
            </tbody>
          ))} */}

          {allSchedule.map((item, id) => (
            <tbody key={id}>
              {item.weeks.map((item) => (
                <tr>
                  <th>{item.date}</th>
                  <td>{item.day}</td>
                  <td>{item.time}</td>
                  <td>{item.status}</td>
                  {user ? (
                    <>
                      <td className="action_wrapper">
                        <Link to={`/edit-schedule/${item._id}`}>
                          <button>edit</button>
                        </Link>
                        <button onClick={() => handleDelete(item._id)}>
                          delete
                        </button>
                      </td>
                    </>
                  ) : (
                    <></>
                  )}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Table;
