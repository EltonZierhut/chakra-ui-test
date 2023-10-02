import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Substitua pela URL de sua API

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      console.log('Token JWT recebido:', response.data.token);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default AuthService;
