import express  from "express";
import cors from "cors"
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv"

// routes
import userRoutes from "./routes/userRoutes";
// app initialisation

const app = express()
dotenv.config()

// dependencies configuartion
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


// getRoutes
app.use("/klab/users",userRoutes)

app.get('/',(req,res)=>{
    res.status(200).json({
        status:"200",
        message:"Success",
        author:'Trainer Muhoza',
    })
})




export default app