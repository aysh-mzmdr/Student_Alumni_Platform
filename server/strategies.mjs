import passport from "passport";
import { Strategy } from "passport-local";

const abcUsers=[
    {id:0,username:"Ravi",password:"1234"},
    {id:1,username:"Prem",password:"7890"},
    {id:2,username:"Mohan",password:"qwerty"},
    {id:3,username:"Animesh",password:"abcd"},
    {id:4,username:"Yash",password:"password123"}
]

passport.use(
    new Strategy((username,password,done) => {
        try{
            const findUser=abcUsers.find((user) => user.username===username);
            if(!findUser) throw new Error("Error");
            if(findUser.password!==password) throw new Error("Error");
            done(null,findUser);
        }
        catch(err){
            done(err,null)
        }
    })
)

passport.serializeUser((user,done) => {
    done(null,user.id)
})

passport.deserializeUser((id,done) => {
    try{
        const findUser=abcUsers.find(user => user.id==id)
        if(!findUser) throw new Error("User Not found");
        done(null,findUser);
    }
    catch(err){
        done(err,null)
    }
})