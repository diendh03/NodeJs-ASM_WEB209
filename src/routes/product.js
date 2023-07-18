import express from "express";
import {
  createProduct,
  getAllProduct,
  getProductById,
  removeProduct,
  updateProduct,
} from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();

router.get("/products", getAllProduct);
router.get("/products/:id", getProductById);
router.post("/products/add", checkPermission, createProduct);
router.delete("/products/:id", checkPermission, removeProduct);
router.patch("/products/update/:id", checkPermission, updateProduct);

export default router;
