import { Router } from "express";
import { herbicide } from "../constants/api.mjs";

const router = Router();

router.get("/herbicide", (req, res) => {
  res.send(herbicide);
});

router.get("/herbicide/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = herbicide.find((item) => item._id === productId);

  if (!productId) {
    return res.status(404).json({ message: "Single item was not found" });
  }
  res.send(product);
});

export default router;
