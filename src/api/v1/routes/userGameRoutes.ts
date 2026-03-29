import { Router } from "express";
import * as userGameController from "../controllers/userGameController";
import {
  validateCreateUserGame,
  validateUpdateUserGameStatus,
} from "../middleware/userGameValidation";

const router = Router();

router.get("/", userGameController.getAllUserGames);
router.post("/", validateCreateUserGame, userGameController.createUserGame);
router.patch(
  "/:id/status",
  validateUpdateUserGameStatus,
  userGameController.updateUserGameStatus
);
router.delete("/:id", userGameController.deleteUserGame);

export default router;