import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./storage/ConfigDb.js";
import AppRouter from "./routes/AppRoutes.js";
import PatRouter from "./routes/PatientRoute.js";
import DocRouter from "./routes/DocRoutes.js";


const app = express();

// MiddleWare
app.use(express.json())
app.use(cors())
app.use('/api',AppRouter)
app.use('/api',PatRouter)
app.use('/api',DocRouter)

// env connection
dotenv.config()
const port = process.env.PORT || 2000

app.listen(port, () => {
    console.log(`Server running ${port}`)
    ConnectDB()
})