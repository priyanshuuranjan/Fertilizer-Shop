import { Router } from "express";
import { herbicide } from "../constants/index.mjs";

const router = Router();

router.get("/herbicide", (req, res) => {
  res.send(herbicide);
});

export default router;
