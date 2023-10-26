import express from 'express'
import cors from 'cors'

import { userRoutes } from './routes/user.routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use(userRoutes)

app.listen(3333, () => "Server running on port 3333")