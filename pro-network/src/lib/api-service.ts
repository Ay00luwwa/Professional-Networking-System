import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
});

export const authAPI = {
  login: (credentials: { username: string; password: string }) =>
    api.post('/api/users/login/', credentials),
  register: (userData: {
    username: string;
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
  }) => api.post('/api/users/register/', userData),
};

export const profileAPI = {
  getProfile: (userId: string, token: string) =>
    api.get(`/api/profiles/profile/${userId}/`, {
      headers: { Authorization: `Bearer ${token}` }
    }),
};