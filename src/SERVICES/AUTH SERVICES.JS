import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default API;



const authService = {
  login: async (data) => {
    console.log("Login:", data);
  },

  register: async (data) => {
    console.log("Register:", data);
  },

  logout: () => {
    localStorage.clear();
  }
};

export default authService;