import { Router } from "express";
import { seed } from "../constants/index.mjs";

const router = Router();

router.get("/seed", (req, res) => {
  res.send(seed);
});

export default router;
