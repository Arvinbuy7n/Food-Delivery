import axios from "axios";

export const api = axios.create({
  baseURL: "https://fooddelivery-x50y.onrender.com",
  headers: {
    "Content-Type": "application.json",
  },
});
