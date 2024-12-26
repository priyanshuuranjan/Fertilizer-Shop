import { Router } from "express";
import { nutrition } from "../constants/api.mjs";

const router = Router();

router.get("/nutrition", (req, res) => {
  res.send(nutrition);
});

router.get("/nutrition/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = nutrition.find((item) => item._id === productId);

  if (!productId) {
    return res.status(404).json({ message: "Single item was not found" });
  }
  res.send(product);
});

export default router;
