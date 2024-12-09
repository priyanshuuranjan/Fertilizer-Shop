import { Router } from "express";
import { pesticide } from "../constants/index.mjs";

const router = Router();

router.get("/pesticide", (req, res) => {
  res.send(pesticide);
});

router.get("/pesticide/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = pesticide.find((item) => item._id === productId);

  if (!productId) {
    return res.status(404).json({ message: "Single item was not found" });
  }
  res.send(product);
});

export default router;
