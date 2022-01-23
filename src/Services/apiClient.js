import axios from "axios";

let instance = axios.create({
  baseURL: "https://thebetter.bsgroup.eu",

  headers: { "Content-Type": "application/json" },
});

export const setInstanceToken = (token) => {
  instance = axios.create({
    baseURL: "https://thebetter.bsgroup.eu",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const apiClient = () => {
  return instance;
};
