// services/mailingServices.js
import axios from 'axios';

// Function to send form data to the backend
const sendFormData = async (formData) => {
  try {
    const response = await axios.post('https://dev-bookish-api-62a3a4e0be02.herokuapp.com/mail/tester', formData); // Adjust the URL to match your backend endpoint
    return response.data;
  } catch (error) {
    console.error('Error sending form data:', error);
    throw error;
  }
};

export default {
  sendFormData,
};
