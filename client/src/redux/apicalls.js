import { loginfailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";
import {
  createScheduleFailure,
  createScheduleStart,
  createScheduleSuccess,
  deleteScheduleFailure,
  deleteScheduleStart,
  deleteScheduleSuccess,
  getScheduleFailure,
  getScheduleStart,
  getScheduleSuccess,
  updateScheduleFailure,
  updateScheduleStart,
  updateScheduleSuccess,
} from "./scheduleRedux";

// login user
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    alert("login success");
  } catch (error) {
    dispatch(loginfailure());
    console.log("login failure" + error);
  }
};

// create schedule
export const createSchedule = async (dispatch, user) => {
  dispatch(createScheduleStart());
  try {
    const res = await axios.post("/schedule", user);
    dispatch(createScheduleSuccess(res.data));
    alert("schedule created !");
    window.location.replace("/");
  } catch (error) {
    dispatch(createScheduleFailure());
    console.log("login failure" + error);
    alert("seoething went wrong !");
  }
};

// get all schedule
export const getAllSchedule = async (dispatch) => {
  dispatch(getScheduleStart());
  try {
    const res = await axios.get("/schedule");
    dispatch(getScheduleSuccess(res.data));
  } catch (error) {
    console.log("unable to get all schedule" + error);
    dispatch(getScheduleFailure());
  }
};

// update schedule
export const updateSchedule = async (id, dispatch, data) => {
  dispatch(updateScheduleStart());
  try {
    const res = await axios.put(`/schedule/${id}`, data);
    dispatch(updateScheduleSuccess(res.data));
    alert("update success !");

    window.location.replace("/");
  } catch (error) {
    console.log("unable to update schedule" + error);
    dispatch(updateScheduleFailure());
  }
};

export const deleteSchedule = async (dispatch, id) => {
  dispatch(deleteScheduleStart());
  try {
    const res = await axios.delete(`/schedule/${id}`);
    dispatch(deleteScheduleSuccess(res.data));
    alert("delete success !");
    window.location.replace("/");
  } catch (error) {
    dispatch(deleteScheduleFailure());
    console.log("unable to delete schedule" + error);
    alert("unable to delete");
  }
};
