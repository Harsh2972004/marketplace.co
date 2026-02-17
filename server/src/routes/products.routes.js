import { Router } from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/product.controller.js";

const router = Router();

// GET /api/products
router.get("/", getProducts);

// GET /api/product/:id
router.get("/:id", getProductById);

export default router;
