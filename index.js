import express from "express";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes.js";

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [
        "http://localhost:5000/api/auth",
        "https://hotelbookingfrontendpvt.vercel.app/"
    ],
    credentials:true
}));

app.get("/",(req,res)=>{
    console.log("Request send");
    res.send("Server has started");
})

app.use('/api/auth',authRouter)
 
app.listen(process.env.PORT,()=>
    console.log(`Server is listening on port ${process.env.PORT}`));