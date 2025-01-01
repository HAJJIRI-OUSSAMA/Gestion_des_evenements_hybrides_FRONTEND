import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpForm from "./components/SignUpForm";
import EventList from "./components/Events";
import AddEventForm from "./components/AddEventsForm";

const App = () => {
  return (
    <Routes>
      {/* Root path */}
      <Route path="/" element={<HomePage />} />
      {/* Sign Up path */}
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/events" element={<EventList />} />
      <Route path="/add-event" element={<AddEventForm />} />
    </Routes>
  );
};

export default App;
