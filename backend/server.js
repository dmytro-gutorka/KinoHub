import { router as movieRouters } from './routes/movies.js'
import express from 'express'

const PORT = process.env.PORT || 8000

const app = express()

app.use('/movies', movieRouters)

app.listen(PORT, () => console.log(`Server is running on ${PORT} port`))