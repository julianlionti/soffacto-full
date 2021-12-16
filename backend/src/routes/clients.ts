import { Router } from "express";

const clients = () => {
  const router = Router();
  router.get("/", (req, res) => {
    res.json({ message: "Clients" });
  });
  return router;
};

export default clients;
