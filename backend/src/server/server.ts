import express from "express";
import Config from "../config/config";
import cors from "cors";
import api from "../routes/api";

export const createServer = (): Express.Application => {
  const app = express();
  app.listen(Config.PORT, () => {
    console.log("SOffacto running on PORT ", Config.PORT);
  });

  app.use(cors());
  app.use(express.json());
  app.use("/api", api());

  return app;
};
