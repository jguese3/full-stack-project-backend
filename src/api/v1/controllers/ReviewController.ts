import { Request, Response, NextFunction } from "express";
import { GameReview } from "@prisma/client";
import { gameReviewService } from "../services/gameReviewService";
import { successResponse } from "../models/responseModel";

/**
 * Controller methods determine how to handle requests and respond to requests.
 * It sends the appropriate components of the request to services (if needed)
 * and responds to the request with an appropriate code/body.
 */

export const getAllReviews = async (
    _req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const reviews = await gameReviewService.getAllReviews({
            limit: 10,
            offset: 0,
        });
        res.status(200).json(
            successResponse(reviews, "Reviews retrieved successfully"),
        );
    } catch (error) {
        next(error);
    }
};

export const getReviewById = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const reviewId = Number(req.params.reviewId);
        const review: GameReview | null = await gameReviewService.getById(reviewId);
        if (review) {
            res.status(200).json(
                successResponse(review, "Review retrieved successfully"),
            );
        } else {
            throw new Error("Review not found");
        }
    } catch (error) {
        next(error);
    }
};

export const createReview = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const newReview = await gameReviewService.createReview(req.body);
        res.status(201).json(
            successResponse(newReview, "Review created successfully"),
        );
    } catch (error) {
        next(error);
    }
};

export const updateReview = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const reviewId = Number(req.params.reviewId);
        const updatedReview = await gameReviewService.update(reviewId, req.body);
        res.status(200).json(
            successResponse(updatedReview, "Review updated successfully"),
        );
    } catch (error) {
        next(error);
    }
};

export const deleteReview = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const reviewId = Number(req.params.reviewId);
        await gameReviewService.deleteReview(reviewId);
        res.status(200).json(successResponse(null, "Review deleted successfully"));
    } catch (error) {
        next(error);
    }
};
