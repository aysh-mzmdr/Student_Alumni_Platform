import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import passport from "passport"
import session from "express-session"
import "./strategies.mjs"
import pool from "../db/database.mjs"
import bcrypt, { genSaltSync } from "bcrypt"

dotenv.config({path:"../.env"})

const app=express()

const CLIENT_PORT=process.env.CLIENT_PORT;

app.use(express.json())

app.use(cors({origin:`http://localhost:${CLIENT_PORT}`,credentials:true}))

app.use(session({
    secret:"Very Secret",
    resave:false,
    saveUninitialized:false,
}))

app.use(passport.initialize())
app.use(passport.session())

const SERVER_PORT=process.env.SERVER_PORT;

app.post("/auth/signup", async (request,response) => {
    const {username,password,firstname,lastname,college,city,state,batch,role,country,department} = request.body;
    const salt=genSaltSync(10)
    const hashedPassword=bcrypt.hashSync(password,salt)
    try{
        await pool.query("INSERT INTO users VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",[username,hashedPassword,firstname,lastname,city,state,batch,role,country,department])
        const user=await pool.query("SELECT uid FROM users WHERE username=$1",[username])
        const user_uid=user.rows[0].uid;
        const university=await pool.query("SELECT uid FROM universities WHERE name=$1",[college])
        const university_uid=university.rows[0].uid;
        await pool.query("INSERT INTO user_university_table VALUES($1,$2)",[user_uid,university_uid])
        return response.sendStatus(200);
    }
    catch(err){
        console.log(err)
        return response.sendStatus(500);
    }
})

app.post("/auth/login",passport.authenticate("local"),(request,response) => {
    return response.sendStatus(200);
})

app.get("/api/alumni",async (request,response) => {
    const user=request.user;
    const university=await pool.query("SELECT university_uid FROM user_university_table WHERE user_uid=$1",[user.uid])
    const university_uid=university.rows[0].university_uid;
    const alumnis=await pool.query("SELECT user_uid FROM user_university_table WHERE university_uid=$1",[university_uid])
    const alumni_uids=alumnis.rows.map(alumni => alumni.user_uid)
    const alumni_data=await pool.query("SELECT * FROM users WHERE uid = ANY($1::int[])",[alumni_uids])
    response.send({alumnis:alumni_data.rows})
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