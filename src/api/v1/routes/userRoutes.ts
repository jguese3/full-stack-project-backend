import { Router } from "express";
import { getUserByUsername, updateUser, fetchUsers } from "../controllers/userController";

const router = Router();

// GET /users/:id
router.get("/users/:username", getUserByUsername);
router.put("/users/:id", updateUser);
router.get("/users", fetchUsers);



export default router;