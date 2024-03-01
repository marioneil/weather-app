import axios from "axios";

export const weatherapi = axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
});
