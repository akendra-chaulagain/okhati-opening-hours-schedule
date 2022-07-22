import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "schedule",
  initialState: {
    schedules: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // prouct reducer to get all products
    getScheduleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getScheduleSuccess: (state, action) => {
      state.isFetching = false;
      state.schedules = action.payload;
    },
    getScheduleFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // update product
    updateScheduleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateScheduleSuccess: (state, action) => {
      state.isFetching = false;
      state.schedules[
        state.schedules.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.schedule;
    },
    updateScheduleFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // delete
    // update product
    deleteScheduleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteScheduleSuccess: (state, action) => {
      state.isFetching = false;
      state.schedules.splice(
        state.schedules.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteScheduleFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // create new schedule
    createScheduleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createScheduleSuccess: (state, action) => {
      state.isFetching = false;
      state.schedules.push(action.payload);
    },
    createScheduleFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getScheduleStart,
  getScheduleSuccess,
  getScheduleFailure,
  updateScheduleFailure,
  updateScheduleSuccess,
  updateScheduleStart,
  deleteScheduleFailure,
  deleteScheduleSuccess,
  deleteScheduleStart,
  createScheduleFailure,
  createScheduleStart,
  createScheduleSuccess,
} = productSlice.actions;

export default productSlice.reducer;
