import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/database.js";
const app=express();
dotenv.config();
connectDB(); 

const PORT=process.env.PORT ||3000;
app.listen(PORT,()=>{
    console.log(`Server listening at port ${PORT}`);
})