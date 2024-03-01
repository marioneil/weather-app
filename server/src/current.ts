import express, { request } from "express";
import axios, { AxiosError } from "axios";
import { weatherapi } from "./axios";
import { SearchArray } from "./types";

export const router = express.Router();

router.get("/", function (req, res) {
  console.log(req.query);
  weatherapi
    .get("/current.json", {
      params: {
        q: req.query.q,
        key: "a76b859e508a403dbe3140412240601",
      },
    })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.send(response.data);
    })
    .catch((error: AxiosError) => {
      console.log(error.message);
    });
});
