import { User } from "@prisma/client"
import prisma from "../../../../prisma/client"

export const getUserById = async(id: number): Promise<User | null> => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });

        return user;
    } catch (error) {
        throw new Error(`Failed to fetch user with id ${id}`)
    }
};

export const updateUser = async (
    id: number,
    userData: { userName: string; bio: string; isFollowing: boolean }
): Promise<User> => {
    try {
        return await prisma.user.update({
            where: { id },
            data: userData
        });
    } catch (error) {
        throw new Error(`Failed to update user with id ${id}`)
    }
}