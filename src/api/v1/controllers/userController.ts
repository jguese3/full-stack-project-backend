import { Request, Response, NextFunction } from "express";
import {User} from "@prisma/client";
import * as userService from "../services/userService";
import { successResponse } from "../models/responseModel";


export const getUserById = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const user: User | null = 
            await userService.getUserById(Number.parseInt(req.params.id));
        if(user) {
            res.json(successResponse(user, "User retrieved successfully"))
        } else {
            throw new Error("User not found");
        }

    } catch(error) {
        next(error);
    }
}