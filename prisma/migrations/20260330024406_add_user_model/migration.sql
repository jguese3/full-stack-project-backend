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

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "bio" TEXT,
    "isFollowing" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");
