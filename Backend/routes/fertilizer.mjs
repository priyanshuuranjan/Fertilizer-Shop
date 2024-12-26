import { Router } from "express";
import { fertilizer } from "../constants/index.mjs";

const router = Router();

router.get("/fertilizer", (req, res) => {
  res.send(fertilizer);
});


export default router;
