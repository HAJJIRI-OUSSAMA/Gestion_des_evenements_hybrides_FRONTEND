import axios from "axios";

// API endpoint
const API = "http://localhost:9091/api/events";

export async function getEvents() {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error.message);
    return [];
  }
}

export async function addEvent(event) {
  try {
    const response = await axios.post(API, event);
    return response.data;
  } catch (error) {
    console.error("Error adding event:", error.message);
    return null;
  }
}

export async function deleteEvent(id) {
  try {
    const response = await axios.delete(`${API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting event:", error.message);
    return null;
  }
}

export async function updateEvent(id, updatedEvent) {
  try {
    const response = await axios.put(`${API}/${id}`, updatedEvent);
    return response.data;
  } catch (error) {
    console.error("Error updating event:", error.message);
    return null;
  }
}

export async function getEvent(id) {
  try {
    const response = await axios.get(`${API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching event:", error.message);
    return null;
  }
}
