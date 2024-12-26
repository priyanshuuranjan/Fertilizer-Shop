import { Router } from "express";
import { nutrition } from "../constants/index.mjs";

const router = Router();

router.get("/nutrition", (req, res) => {
  res.send(nutrition);
});

export default router;
