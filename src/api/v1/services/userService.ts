import { User } from "@prisma/client"
import prisma from "../../../../prisma/client"

export const getUserById = async(id: number): Promise<User | null> => {
    try {
        const user = prisma.user.findUnique({
            where: {
                id: id
            }
        });

        if(!user) {
            return null;
        } else{
            return user;
        }
    } catch(error) {
        throw new Error(`Failed to fetch user with id ${id}`);
    }
}
