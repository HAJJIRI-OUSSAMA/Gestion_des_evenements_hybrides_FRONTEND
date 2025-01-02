import React, { useEffect, useState } from "react";
import { getEvents } from "../services/eventServices";
import { Link } from "react-router-dom";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events from API
  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const data = await getEvents();
      setEvents(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load events. Please try again.");
      setLoading(false);
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading events...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = ("0" + dateObj.getDate()).slice(-2); // Format day to 2 digits
    const month = ("0" + (dateObj.getMonth() + 1)).slice(-2); // Format month to 2 digits
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Render event cards
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Available Events
        <Link to={"/add-event"}>
          <button className="bg-transparent hover:bg-[#65ba49] text-dark font-bold hover:text-white mx-6 py-1 px-4 border-4 border-[#65ba49] hover:border-transparent rounded">
            New Event
          </button>
        </Link>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-blue-600">{event.nom}</h3>
            <p className="text-gray-600 mt-2">Date: {formatDate(event.date)}</p>
            <p className="text-gray-600 mt-1">
              Mode: {event.mode === "online" ? "Online" : "In-Person"}
            </p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              onClick={() => alert(`View details for ${event.name}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
