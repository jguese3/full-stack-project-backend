import { GameReview } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

type ListGameReviewFilters = {
    gameId?: string;
    userId?: string;
    limit: number;
    offset: number;
};

type CreateGameReviewInput = {
    gameId: string;
    userId: string;
    comment: string;
    ratings: number;
    date?: Date;
};

type UpdateGameReviewInput = Partial<
    Pick<CreateGameReviewInput, "comment" | "ratings" | "date">
>;

export const gameReviewService = {
    async getAllReviews(filters: ListGameReviewFilters): Promise<GameReview[]> {
        return prisma.gameReview.findMany({
            where: {
                gameId: filters.gameId,
                userId: filters.userId,
            },
            orderBy: {
                date: "desc",
            },
            take: filters.limit,
            skip: filters.offset,
        });
    },

    async getById(reviewId: number): Promise<GameReview | null> {
        return prisma.gameReview.findUnique({ where: { reviewId } });
    },

    async createReview(data: CreateGameReviewInput): Promise<GameReview> {
        return prisma.gameReview.create({
            data,
        });
    },

    async leaveAReview(data: CreateGameReviewInput): Promise<GameReview> {
        return prisma.gameReview.create({
            data,
        });
    },

    async update(reviewId: number, data: UpdateGameReviewInput): Promise<GameReview> {
        return prisma.gameReview.update({
            where: { reviewId },
            data,
        });
    },

    async deleteReview(reviewId: number): Promise<GameReview> {
        return prisma.gameReview.delete({ where: { reviewId } });
    },

    // Compatibility aliases for existing controller calls.
    async list(filters: ListGameReviewFilters): Promise<GameReview[]> {
        return this.getAllReviews(filters);
    },

    async create(data: CreateGameReviewInput): Promise<GameReview> {
        return this.createReview(data);
    },

    async remove(reviewId: number): Promise<GameReview> {
        return this.deleteReview(reviewId);
    },
};
