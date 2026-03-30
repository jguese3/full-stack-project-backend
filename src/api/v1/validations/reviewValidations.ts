import Joi, { ObjectSchema } from "joi";

export const createReviewSchema: ObjectSchema = Joi.object({
    gameId: Joi.number().required(),
    username: Joi.string().min(1).required(),
    comment: Joi.string().required(),
    ratings: Joi.number().integer().min(1).max(5).required(),
    date: Joi.date().optional()
});

export const updateReviewSchema: ObjectSchema = Joi.object({
    comment: Joi.string().optional(),
    ratings: Joi.number().integer().min(1).max(5).optional(),
    date: Joi.date().optional()
});

export const reviewIdSchema: ObjectSchema = Joi.object({
    reviewId: Joi.number().integer().positive().required()
});
