import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

// GET /api/products
router.get("/", getProducts);

// GET /api/products/:id
router.get("/:id", getProductById);

// POST /api/products/
router.post("/", authMiddleware, createProduct);

// PUT /api/products/:id
router.put("/:id", authMiddleware, updateProduct);

// DELETE /api/products/:id
router.delete("/:id", authMiddleware, deleteProduct);

export default router;
