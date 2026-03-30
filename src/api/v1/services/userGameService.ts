import { prisma } from "../../../lib/prisma";

type UserGameStatus = "backlog" | "playing" | "completed";

export const getAllUserGames = async () => {
  return await prisma.userGame.findMany({
    orderBy: { id: "asc" },
  });
};

export const createUserGame = async (
  title: string,
  platform: string,
  status?: UserGameStatus
) => {
  return await prisma.userGame.create({
    data: {
      title,
      platform,
      ...(status ? { status } : {}),
    },
  });
};

export const deleteUserGame = async (id: number) => {
  await prisma.userGame.delete({ where: { id } });
};

export const updateUserGameStatus = async (id: number, status: UserGameStatus) => {
  return await prisma.userGame.update({
    where: { id },
    data: { status },
  });
};