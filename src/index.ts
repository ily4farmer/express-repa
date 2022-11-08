import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: 'helloy'})
})

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}/`)
})
