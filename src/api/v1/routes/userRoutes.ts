import { Router } from "express";
import { getUserById } from "../controllers/userController";

const router = Router();

// GET /users/:id
router.get("users.:d", getUserById);

export default router;