import { Router } from "express";
import { equiData } from "../constants/index.mjs";

const router = Router();

router.get("/equipment", (req, res) => {
  res.send(equiData);
});

export default router;
