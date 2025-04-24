import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config({path:"../.env"})

const app=express()

const CLIENT_PORT=process.env.CLIENT_PORT;

app.use(express.json())

app.use(cors({origin:`http://localhost:${CLIENT_PORT}`}))

const SERVER_PORT=process.env.SERVER_PORT;

app.get("/api/message",(request,response) => {
    response.json({message:"Ravi Shankar Banerjee"})
})

app.listen(SERVER_PORT)