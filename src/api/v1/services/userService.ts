import { User } from "@prisma/client"
import prisma from "../../../../prisma/client"

export const getUserByUsername = async(userName: string): Promise<User | null> => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                userName: userName
            }
        });

        return user;
    } catch (error) {
        throw new Error(`Failed to fetch user with username ${userName}`)
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

export const fetchUsers = async (): Promise<User[]> => {
    try {
        return await prisma.user.findMany();
    } catch (error) {
        throw new Error("Failed to fetch users")
    }
}