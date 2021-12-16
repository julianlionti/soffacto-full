import { Router } from "express";
import clients from "./clients";

const api = () => {
  const router = Router();
  router.use("/clients", clients());
  return router;
};

export default api;
