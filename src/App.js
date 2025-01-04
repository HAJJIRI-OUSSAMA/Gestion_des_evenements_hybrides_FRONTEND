import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpForm from "./components/SignUpForm";
import EventList from "./components/Events";
import AddEventForm from "./components/AddEventsForm";
import Header from "./components/Header";
import ParticipateForm from "./components/ParticipateForm";

const App = () => {
  return (
    <>
      <Header />
      <main className="flex-grow ">
        <Routes>
          {/* Root path */}
          <Route path="/" element={<HomePage />} />
          {/* Sign Up path */}
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/add-event" element={<AddEventForm />} />
          <Route path="/participate/:eventId" element={<ParticipateForm />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
