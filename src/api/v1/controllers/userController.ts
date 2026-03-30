import { Request, Response, NextFunction } from "express";
import { User } from "@prisma/client";
import * as userService from "../services/userService";
import { successResponse } from "../models/responseModel";


export const getUserByUsername = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const user: User | null = 
            await userService.getUserByUsername(req.params.username as string);
        if(user) {
            res.json(successResponse(user, "User retrieved successfully"))
        } else {
            throw new Error("User not found");
        }

    } catch(error) {
        next(error);
    }
}

export const updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const updateUser = await userService.updateUser(
            Number.parseInt(req.params.id as string),
            req.body
        );

        res.json(successResponse(updateUser, "User updated successfully"));
    } catch (error) {
        next(error);
    }
}