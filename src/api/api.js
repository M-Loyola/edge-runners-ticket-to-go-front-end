import axios from "axios";

const LOCAL_BASE_URL = "http://localhost:8080/";

export const api = axios.create(
  {
    dev: {
      baseURL: LOCAL_BASE_URL,
    },
    qa: {
      baseURL: "https://ex-ticket-to-go-back-end-qa.up.railway.app/",
    },
    prod: {
      baseURL: "https://ex-ticket-to-go-back-end-production.up.railway.app",
    },
  }[process.env.REACT_APP_ENV || "dev"]
);
export default api;
