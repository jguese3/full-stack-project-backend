import { Request, Response } from "express";
import * as userGameService from "../services/userGameService";

type UserGameStatus = "backlog" | "playing" | "completed";

export const getAllUserGames = async (_req: Request, res: Response) => {
  try {
    const userGames = await userGameService.getAllUserGames();
    res.status(200).json(userGames);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user games", error });
  }
};

export const createUserGame = async (req: Request, res: Response) => {
  try {
    const { title, platform, status } = req.body;
    const newUserGame = await userGameService.createUserGame(
      title,
      platform,
      status as UserGameStatus | undefined
    );
    res.status(201).json(newUserGame);
  } catch (error) {
    res.status(500).json({ message: "Error creating user game", error });
  }
};

export const deleteUserGame = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await userGameService.deleteUserGame(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting user game", error });
  }
};

export const updateUserGameStatus = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { status } = req.body;
    const updatedUserGame = await userGameService.updateUserGameStatus(
      id,
      status as UserGameStatus
    );
    res.status(200).json(updatedUserGame);
  } catch (error) {
    res.status(500).json({ message: "Error updating user game status", error });
  }
};