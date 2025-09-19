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
  "http://localhost:5173",        // local frontend
  "http://localhost:5174",        // local admin
  "https://docslot02.vercel.app", // deployed frontend
  "https://<your-admin-url>"      // deployed admin (replace with real URL later)
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
