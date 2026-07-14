import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getMyApplications = async (token) => {
  // code
};
export const applyScholarship = async (formData, token) => {
  return axios.post(
    `${API_URL}/applications/apply`,
    formData,
    {
      headers: {
        authorization: token,
      },
    }
  );
};