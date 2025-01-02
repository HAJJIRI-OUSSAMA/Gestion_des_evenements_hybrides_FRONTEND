import React, { useState } from "react";
import { addEvent } from "../services/eventServices";
import { useNavigate } from "react-router-dom";

const AddEventForm = () => {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [mode, setMode] = useState("");
  const [lien, setLien] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();

    if (!nom || !description || !date || !mode) {
      setError("All fields are required except for the link.");
      return;
    }

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      setError("Please provide a valid date.");
      return;
    }

    try {
      const event = {
        nom,
        description,
        date: parsedDate,
        mode,
        lien,
      };
      await addEvent(event);

      setMessage("Event added successfully!");
      setError("");
      navigate("/events");
    } catch (err) {
      setError("Failed to add event. Please try again.");
      console.error(err);
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Event</h2>
      {message && <p className="text-green-600 mb-4">{message}</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleForm}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setNom(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter event title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter event description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date.split("-").reverse().join("-")}
            required
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="mode">
            Mode
          </label>
          <select
            id="mode"
            name="mode"
            required
            onChange={(e) => setMode(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Mode</option>
            <option value="online">online</option>
            <option value="in-person">in-person</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="lien">
            Link (Optional)
          </label>
          <input
            type="url"
            id="lien"
            name="lien"
            onChange={(e) => setLien(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter event link"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEventForm;
