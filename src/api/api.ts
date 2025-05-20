import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: { 'Content-Type': 'application/json' },
});

export const login = async (username: string, password: string) => {
  const { data } = await api.post('/auth/login', { username, password });
  return data;
};

export const listarAlunos = async () => {
  const { data } = await api.get('/users');
  return data.users;
};

export const buscarAlunoPorId = async (id: number) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export default api;