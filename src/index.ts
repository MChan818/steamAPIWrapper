import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { AxiosResponse } from "axios";

const axios = require("axios");
const steamRoutes = require("./routes/steamRoutes");
const csgoRoutes = require("./routes/csgoRoutes");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/", steamRoutes);
app.use("/csgo", csgoRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
