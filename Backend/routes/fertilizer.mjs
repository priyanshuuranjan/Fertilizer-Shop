import { Router } from "express";
import { fertilizer } from "../constants/api.mjs";

const router = Router();

router.get("/fertilizer", (req, res) => {
  res.send(fertilizer);
});

router.get("/fertilizer/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = fertilizer.find((item) => item._id === productId);

  if (!productId) {
    return res.status(404).json({ message: "Single item was not found" });
  }
  res.send(product);
});

export default router;
