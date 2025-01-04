import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  addParticipant,
  getParticipants,
} from "../services/participantServices";
import { getEvent } from "../services/eventServices";

const ParticipateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modeParticipation, setModeParticipation] = useState("");
  const [participants, setParticipants] = useState([]);
  const [eventParticipants, setEventParticipants] = useState([]); // Fetch event participants when the component mounts
  const { eventId } = useParams(); // Get the event ID from the URL
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    getEventById();
  }, []);

  const getEventById = async () => {
    const e = await getEvent(eventId);
    setEventParticipants(e.listeParticipants);
    allParticipants();
  };

  const allParticipants = async () => {
    const P = await getParticipants();
    if (P) {
      console.log("Participants: ", P);
      P.map((p) => {
        setEventParticipants((ep) => [...ep, p.name]);
        return true;
      });
      console.log("Event participants: ", eventParticipants);
    } else {
      console.log("No participants found.");
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    const participant = { name, email, modeParticipation, eventId };
    try {
      await addParticipant(participant);
      console.log("Participant added successfully:");
      navigate(`/events`);
    } catch (error) {
      setError("Failed to add participant. Please try again.");
    }
  }

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Participate in Event
      </h1>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Participation Mode</label>
          <select
            name="modeParticipation"
            onChange={(e) => setModeParticipation(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          >
            <option value="online">Online</option>
            <option value="in-Person">In-Person</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-[#59CE8F] text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Confirm Participation
        </button>
      </form>
    </div>
  );
};

export default ParticipateForm;
