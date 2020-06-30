import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

const axiosApi = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    Authorization: `Token ${localStorage.getItem("Token")}`
      ? `Token ${localStorage.getItem("Token")}`
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosApi;
