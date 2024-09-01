import express, { Application ,Request, Response} from 'express'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT || 8000
const app : Application = express()


//middlwares
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false}))

app.get('/' , (req: Request, res: Response) => {
    return res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})