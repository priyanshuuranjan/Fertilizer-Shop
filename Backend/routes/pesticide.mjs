import { Router } from "express";
import { pestiData } from "../constants/index.mjs";

const router = Router();

router.get("/pesticide", (req, res) => {
  res.send(pestiData);
});


export default router;
