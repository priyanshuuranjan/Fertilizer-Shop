import { Router } from "express";
import { fertData } from "../constants/index.mjs";

const router = Router();

router.get("/fertilizer", (req, res) => {
  res.send(fertData);
});

export default router;
