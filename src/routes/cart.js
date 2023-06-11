import express from "express";

import { checkPermission } from "../middlewares/checkPermission";
import {
  createCart,
  getAllCart,
  getOneCartById,
  updateCart,
} from "../controllers/cart";
const router = express.Router();

router.get("/carts", getAllCart);
router.get("/carts/:id", getOneCartById);
router.post("/cart/add", checkPermission, createCart);
router.patch("/carts/update/:id", checkPermission, updateCart);

export default router;
