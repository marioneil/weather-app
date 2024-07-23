import express, { request } from "express";
import axios, { AxiosError } from "axios";
import { weatherapi } from "./axios";
import { SearchArray } from "./types";

export const router = express.Router();
//https://api.weatherapi.com/v1/forecast.json?q=m1s1s4&days=1&key=a76b859e508a403dbe3140412240601
// 'https://api.weatherapi.com/v1/forecast.json?q=m1s1s4&days=2&dt=2024-07-04&tp=24&key=a76b859e508a403dbe3140412240601'
router.get("/", function (req, res) {
  console.log(req.query);
  weatherapi
    .get("/forecast.json", {
      params: {
        q: req.query.q,
        key: "a76b859e508a403dbe3140412240601",
        days: "2",
        dt: "2024-07-04",
        tp: "24",
      },
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.send(response.data);
    })
    .catch((error: AxiosError) => {
      console.log(error.message);
      res.status(400).send(error);
    });
});
