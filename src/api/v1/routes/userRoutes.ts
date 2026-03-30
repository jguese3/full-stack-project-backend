import { Router } from "express";
import { getUserById, updateUser } from "../controllers/userController";

const router = Router();

// GET /users/:id
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);


export default router;