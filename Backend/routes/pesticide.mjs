import { Router } from "express";
import { pesticide } from "../constants/index.mjs";

const router = Router();

router.get("/pesticide", (req, res) => {
  res.send(pesticide);
});


export default router;
