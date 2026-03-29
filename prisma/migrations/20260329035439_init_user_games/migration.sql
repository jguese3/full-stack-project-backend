-- CreateEnum
CREATE TYPE "GameStatus" AS ENUM ('backlog', 'playing', 'completed');

-- CreateTable
CREATE TABLE "UserGame" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "status" "GameStatus" NOT NULL DEFAULT 'backlog',

    CONSTRAINT "UserGame_pkey" PRIMARY KEY ("id")
);
