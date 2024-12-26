import { Router } from "express";
import { nutriData } from "../constants/index.mjs";

const router = Router();

router.get("/nutrition", (req, res) => {
  res.send(nutriData);
});

export default router;
