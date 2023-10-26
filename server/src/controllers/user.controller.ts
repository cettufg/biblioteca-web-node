import { Request, Response } from 'express'
import { createUser, getAllUsers } from '../repositories/user.repository'

export const create = async (req: Request, res: Response) => {
    
    try {
        const user = await createUser(req.body)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const get = async (req: Request, res: Response) => {

    try {
        const users = await getAllUsers()
        res.status(200).send(users)
    } catch (error) {
        res.status(400).json(error)
    }
}