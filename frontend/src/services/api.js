import axios from "axios";
const API = process.env.REACT_APP_API_URL;

/* ================= AUTH ================= */

export const registerUser = (data) => {
  return axios.post(`${API}/api/auth/signup`, data);
};

export const loginUser = (data) => {
  return axios.post(`${API}/api/auth/login`, data);
};

/* ================= GITHUB ================= */

export const analyzeUser = (username) => {
  return axios.post(`${API}/api/github/analyze`, { username });
};

export const getAllProfiles = () => {
  return axios.get(`${API}/api/github/all`);
};

export const getProfileById = (id) => {
  return axios.get(`${API}/api/github/${id}`);
};