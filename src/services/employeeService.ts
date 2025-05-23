import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api"; 
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response);
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;

export const getEmployees = async () => {
  const response = await api.get('/employees');
  return response.data;
};


export const searchAttendances = async (searchData: any) => {
  const response = await api.post('/attendances/search', searchData);
  return response.data;
};

export const getAttendances = async () => {
  const response = await api.get('/attendances');
  return response.data;
};

export const searchEmployees = async (query: string) => {
  const response = await api.get(`/employees/search?query=${query}`);
  return response.data;
};

export const fetchEmployeeAttendance = async () => {
  const response = await axios.get(`${API_BASE_URL}/employee-attendance`);
  return response.data;
};

export const fetchTopPerformers = async () => {
  const response = await axios.get(`${API_BASE_URL}/top-performers`);
  return response.data;
};

