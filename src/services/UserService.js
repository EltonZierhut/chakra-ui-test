// UserService.js

import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const UserService = {
  getUsers: async () => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.get(`${API_URL}/users`, {
        headers: {
          'x-access-token': token,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
