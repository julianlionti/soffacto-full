import express from "express";
import Config from "../config/config";
import api from "../routes/api";
import { connectDatabase } from "./db";

export const createServer = (): Express.Application => {
  connectDatabase();

  const app = express();
  app.listen(Config.PORT, () => {
    console.log(`${Config.NAME} running on PORT ${Config.PORT}`);
  });

  app.use(express.json());
  app.use("/api", api());

  return app;
};
