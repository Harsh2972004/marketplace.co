import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { loginSchema, registerSchema } from "../validator/auth.schema.js";

const router = Router();

// POST /api/auth/register
router.post("/register", validate(registerSchema), registerUser);

// POST /api/auth/login
router.post("/login", validate(loginSchema), loginUser);

export default router;
