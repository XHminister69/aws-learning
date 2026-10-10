import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app =express()

app.get("/",(req,res)=>{
return res.status(200).json({
    message:"hello from docker"
})
})
const PORT = process.env.PORT || 5000
app.listen(PORT ,"0.0.0.0",()=>{
    console.log("server is started")
})