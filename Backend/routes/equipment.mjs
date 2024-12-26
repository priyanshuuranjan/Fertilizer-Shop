import { Router } from "express";
import { equipment } from "../constants/api.mjs";

const router = Router();

router.get("/equipment", (req, res) => {
  res.send(equipment);
});

router.get("/equipment/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = equipment.find((item) => item._id === productId);

  if (!productId) {
    return res.status(404).json({ message: "Single item was not found" });
  }
  res.send(product);
});

export default router;
