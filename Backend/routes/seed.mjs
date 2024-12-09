import { Router } from "express";
import { seed } from "../constants/index.mjs";

const router = Router();

router.get("/seed", (req, res) => {
  res.send(seed);
});

router.get("/seed/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = seed.find((item) => item._id === productId);

  if (!productId) {
    return res.status(404).json({ message: "Single item was not found" });
  }
  res.send(product);
});

export default router;
