import axios from "axios";

const axiosInstance = axios.create({
  // this configuration is getting in every request in you apis
  baseURL: "https://....prometteur.in",
  Authorization: `Bearer ${localStorage.getItem("user-token")}`,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(config);
    config.headers.common["Accept"] = "application/json";
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
    if (error.status === 400) {
      return "No record Found";
    }
    return Promise.reject(error);
  }
);
