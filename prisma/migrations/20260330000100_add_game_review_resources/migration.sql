-- CreateTable
CREATE TABLE "GameReview" (
    "reviewId" SERIAL NOT NULL,
    "gameId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "ratings" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GameReview_pkey" PRIMARY KEY ("reviewId")
);

-- CreateTable
CREATE TABLE "GameReviewResource" (
    "id" SERIAL NOT NULL,
    "gameReviewId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'other',
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GameReviewResource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GameReview_gameId_idx" ON "GameReview"("gameId");

-- CreateIndex
CREATE INDEX "GameReview_userId_idx" ON "GameReview"("userId");

-- CreateIndex
CREATE INDEX "GameReviewResource_gameReviewId_idx" ON "GameReviewResource"("gameReviewId");

-- CreateIndex
CREATE UNIQUE INDEX "GameReviewResource_gameReviewId_url_key" ON "GameReviewResource"("gameReviewId", "url");

-- AddForeignKey
ALTER TABLE "GameReviewResource" ADD CONSTRAINT "GameReviewResource_gameReviewId_fkey" FOREIGN KEY ("gameReviewId") REFERENCES "GameReview"("reviewId") ON DELETE CASCADE ON UPDATE CASCADE;
