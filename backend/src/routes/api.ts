import { Router } from "express";
import clients from "./clients";

const api = () => {
  const router = Router();
  router.use("/clients", clients());

  router.get("/", (req, res) => {
    res.send("<h1>Api</h1>");
  });
  return router;
};

export default api;
