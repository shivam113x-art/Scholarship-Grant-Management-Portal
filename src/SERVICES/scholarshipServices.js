import API from "./api";

export const getScholarships = () => {
  return API.get("/scholarships");
};

export const createScholarship = (data, token) => {
  return API.post("/scholarships", data, {
    headers: {
      authorization: token,
    },
  });
};