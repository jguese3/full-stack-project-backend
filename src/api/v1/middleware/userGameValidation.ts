import { Request, Response, NextFunction } from "express";

const validStatuses = ["backlog", "playing", "completed"];

export const validateCreateUserGame = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, platform, status } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ message: "title is required" });
  }

  if (!platform || typeof platform !== "string") {
    return res.status(400).json({ message: "platform is required" });
  }

  if (status && !validStatuses.includes(status)) {
    return res.status(400).json({ message: "invalid status" });
  }

  next();
};

export const validateUpdateUserGameStatus = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status } = req.body;

  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({ message: "invalid status" });
  }

  next();
};