import express from "express";
import { create, get, getAll, remove, update } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();

router.get("/categories", getAll);
router.get("/categories/:id", get);
router.post("/categories/add", checkPermission, create);
router.delete("/categories/:id", checkPermission, remove);
router.patch("/categories/update/:id", checkPermission, update);

export default router;
