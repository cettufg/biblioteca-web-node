import { User } from "@prisma/client"
import { prisma } from "../services/prisma"

export const createUser = async (data: User) => {

    const user = await prisma.user.create({data})

    return user
}

export const getAllUsers = async () => {
    const users = await prisma.user.findMany({})

    return users
}