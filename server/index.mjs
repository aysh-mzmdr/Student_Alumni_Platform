import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import passport from "passport"
import session from "express-session"
import "./strategies.mjs"

dotenv.config({path:"../.env"})

const app=express()

const CLIENT_PORT=process.env.CLIENT_PORT;

app.use(express.json())

app.use(cors({origin:`http://localhost:${CLIENT_PORT}`,credentials:true}))

app.use(session({
    secret:"Very Secret",
    resave:false,
    saveUninitialized:false,
    cookie: {sameSite:"lax",secure:false}
}))

app.use(passport.initialize())
app.use(passport.session())

const SERVER_PORT=process.env.SERVER_PORT;

app.post("/auth/login",passport.authenticate("local"),(request,response) => {
    return response.sendStatus(200);
})

app.post("/auth/logout",(request,response) => {
    if(!request.user) return response.sendStatus(401);
    request.logout((err) => {
        if(err) return response.sendStatus(400)
        request.session.destroy((err) => {
            if(err) return response.sendStatus(500)
            response.clearCookie("connect.sid")
            return response.sendStatus(200)
    })
    })
})

app.listen(SERVER_PORT)