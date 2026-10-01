// src/api.jsx
const BASE_URL = 'http://localhost:3000';

// Fetch all agents (Phase 2)
export const getAgents = async () => {
  try {
    const response = await fetch(`${BASE_URL}/agents`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json(); 
  } catch (error) {
    console.error("Failed to fetch agents:", error);
    return []; 
  }
};

// Dispatch a new agent (Boss Level Challenge)
export const addAgent = async (newAgent) => {
  try {
    const response = await fetch(`${BASE_URL}/agents`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAgent)
    });
    
    if (!response.ok) {
      throw new Error('Failed to add agent');
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to deploy agent:", error);
    return null;
  }
};