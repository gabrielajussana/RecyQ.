import axios from 'axios';

const API_URL = 'http://localhost:1337';

export const getUserScore = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user-scores/${userId}`);
    return response.data.score;
  } catch (error) {
    console.error(error);
    return null;
  }
};
