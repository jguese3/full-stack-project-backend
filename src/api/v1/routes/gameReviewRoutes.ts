import { Router } from "express";
import {
	getAllReviews,
	getReviewById,
	createReview,
	updateReview,
	deleteReview,
} from "../controllers/ReviewController";
import {
	validateCreateReview,
	validateReviewId,
	validateUpdateReview,
} from "../middleware/reviewValidation";

const gameReviewRouter = Router();

gameReviewRouter.get("/", getAllReviews);

gameReviewRouter.get("/:reviewId", validateReviewId, getReviewById);

gameReviewRouter.post("/", validateCreateReview, createReview);

gameReviewRouter.patch("/:reviewId", validateReviewId, validateUpdateReview, updateReview);

gameReviewRouter.delete("/:reviewId", validateReviewId, deleteReview);

export default gameReviewRouter;
