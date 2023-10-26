import { Router } from 'express'
import { create, get } from '../controllers/user.controller'

const userRoutes = Router();

userRoutes.post('/user', create)
userRoutes.get('/user', get)

export { userRoutes }