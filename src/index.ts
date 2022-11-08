import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import router from './routes'
dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/api', router)


// app.get('/', (req: Request, res: Response) => {
//   res.status(200).json({message: 'hello'})
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}/`)
})
