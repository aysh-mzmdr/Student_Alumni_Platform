import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import passport, { Passport } from "passport"

dotenv.config({path:"../.env"})

const app=express()

const CLIENT_PORT=process.env.CLIENT_PORT;

app.use(express.json())
app.use(session())
app.use(Passport.initialize())
app.use(Passport.session())

app.use(cors({origin:`http://localhost:${CLIENT_PORT}`}))

const SERVER_PORT=process.env.SERVER_PORT;

app.post("/auth/login",passport.authenticate("local",{
    successRedirect:"/dashboard",
    failureRedirect:"/login"
}))

app.post("/auth/logout",(request,response) => {
    if(!request.user) return response.sendStatus(401);
    request.logout((err) => {
        if(err) return response.sendStatus(400)
        return response.sendStatus(200);
    })
})

app.listen(SERVER_PORT)