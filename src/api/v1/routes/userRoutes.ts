import { Router } from "express";
import { getUserByUsername, updateUser } from "../controllers/userController";

const router = Router();

// GET /users/:id
router.get("/users/:username", getUserByUsername);
router.put("/users/:id", updateUser);


export default router;