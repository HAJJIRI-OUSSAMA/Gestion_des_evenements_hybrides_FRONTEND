import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import SignUpForm from "../components/SignUpForm";
// import Footer from "../components/Footer";
// import EventListPreview from "../components/EventListPreview";

const HomePage = () => {
  const navigate = useNavigate();

  const handleBecomeOrganizerClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Default route */}
          <Route
            path="/"
            element={<HeroSection onBecomeOrganizerClick={handleBecomeOrganizerClick} />}
          />
          {/* Sign Up route */}
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
