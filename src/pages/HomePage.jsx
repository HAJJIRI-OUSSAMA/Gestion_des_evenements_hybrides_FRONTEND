import React from "react";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "../components/HeroSection";

const HomePage = () => {
  const navigate = useNavigate();

  const handleBecomeOrganizerClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <HeroSection onBecomeOrganizerClick={handleBecomeOrganizerClick} />
    </div>
  );
};

export default HomePage;
