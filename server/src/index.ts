import express from "express";
import axios from "axios";
import { router as searchRouter } from "./search";
import { router as currentRouter } from "./current";
import { router as hourlyRouter } from "./hourly";

import cors from "cors";

//const router = express.Router();
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/search", searchRouter);
app.use("/current", currentRouter);
app.use("/hourly", hourlyRouter);

// Home page route.
app.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route.
app.get("/about", function (req, res) {
  res.send("About this wiki");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//module.exports = router;
