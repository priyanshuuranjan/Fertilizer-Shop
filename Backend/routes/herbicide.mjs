import { Router } from "express";
import { herbiData } from "../constants/index.mjs";

const router = Router();

router.get("/herbicide", (req, res) => {
  res.send(herbiData);
});

export default router;
