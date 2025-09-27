import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

//api config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://docslot02.vercel.app",
  "https://docslot02-f99i.vercel.app"   // <--- your admin URL
]


app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

app.use(express.json())

//api endpoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

app.get('/', (req, res) => {
  res.send('API WORKING ')
})

app.listen(port, () => console.log("Server Started", port))
