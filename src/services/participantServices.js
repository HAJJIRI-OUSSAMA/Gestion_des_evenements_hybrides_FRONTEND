import axios from "axios";

// API endpoint
const API = "http://localhost:9091/api/participants";

export async function getParticipants() {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    console.error("Error fetching participants:", error.message);
    return [];
  }
}

export async function updateParticipant(participant) {
  try {
    const response = await axios.put(`${API}/${participant.id}`, participant);
    return response.data;
  } catch (error) {
    console.error("Error updating participant:", error.message);
    return null;
  }
}

export async function deleteParticipant(participantId) {
  try {
    const response = await axios.delete(`${API}/${participantId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting participant:", error.message);
    return null;
  }
}

export async function addParticipant(participant) {
  try {
    const response = await axios.post(API, participant);
    return response.data;
  } catch (error) {
    console.error("Error creating participant:", error.message);
    return null;
  }
}
