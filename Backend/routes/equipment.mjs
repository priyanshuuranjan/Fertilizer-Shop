import { Router } from "express";
import { equipment } from "../constants/index.mjs";

const router = Router();

router.get("/equipment", (req, res) => {
  res.send(equipment);
});

export default router;
