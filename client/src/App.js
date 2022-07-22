import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import ScheduleTable from "./pages/scheduleTable/ScheduleTable";
import CreateSchedule from "./pages/createSchedule/CreateSedule"
import Login from "./pages/login/Login";
import EditSchedule from "./pages/editSchedule/EditSchedule";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* home page */}
        <Route path="/" element={<ScheduleTable />} />
        {/* create schedule */}
        <Route path="/create-schedule" element={<CreateSchedule />} />

        <Route path="/edit-schedule/:id" element={<EditSchedule />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
