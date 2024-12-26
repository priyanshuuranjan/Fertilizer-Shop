import { Router } from "express";
import { seedData } from "../constants/index.mjs";

const router = Router();

router.get("/seed", (req, res) => {
  res.send(seedData);
});

export default router;
