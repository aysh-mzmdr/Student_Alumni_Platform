import passport from "passport";
import { Strategy } from "passport-local";
import pool from "../db/database.mjs"
import bcrypt from "bcrypt"

passport.use(
    new Strategy(async (username,password,done) => {
        try{
            const findUser=await pool.query("SELECT * FROM users WHERE username = $1",[username]);
            const User=findUser.rows[0];
            if(!User) throw new Error("Error");
            if(!bcrypt.compareSync(password,User.password)) throw new Error("Error");
            done(null,User);
        }
        catch(err){
            done(err,null)
        }
    })
)

passport.serializeUser((user,done) => {
    done(null,user.uid)
})

passport.deserializeUser(async (uid,done) => {
    try{
        const findUser=await pool.query("SELECT * FROM users WHERE uid = $1",[uid])
        const User=findUser.rows[0];
        if(!User) throw new Error("User Not found");
        done(null,User);
    }
    catch(err){
        done(err,null)
    }
})