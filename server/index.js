import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./db/db.js";
import { config } from "dotenv";
import session from "express-session";
import passport from "passport";
import { Strategy as OAuth2Strategy } from "passport-google-oauth2";
import User from "./models/userModel.js";
import courseRoutes from "./routes/courseRoutes.js";
const app = express();

config({
    path: ".env"
})

connectDB();

app.use(morgan("dev"));
app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));
app.use(express.json());

// ***************************************
app.use(express.urlencoded({extended:true}));
// ***************************************


app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:true,
    saveUninitialized:false,
    cookie:{
        maxAge: 24 * 60 * 60 * 1000
    }
}))

// setuppassport
app.use(passport.initialize());
app.use(passport.session());


passport.use(
    new OAuth2Strategy({
        clientID:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        try {
            let newuser = await User.findOne({googleId:profile.id});

            if(!newuser){
                newuser = new User({
                    googleId:profile.id,
                    name:profile.displayName,
                    email:profile.emails[0].value
                });

                await newuser.save();
            }

            return done(null,newuser)
        } catch (error) {
            return done(error,null)
        }
    }
    )
)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
});


// initial google ouath login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:`${process.env.CLIENT_URL}/dashboard`,
    failureRedirect:process.env.CLIENT_URL
}))

app.get("/login/sucess",async(req,res)=>{

    if(req.user){
        res.status(200).json({success:"true",message:"user Login",user:req.user})
    }else{
        res.status(400).json({message:"Not Authorized"})
    }
})

app.get("/logout",(req,res,next)=>{
    req.logout(function(err){
        if(err){return next(err)}
        res.redirect(process.env.CLIENT_URL);
    })
})


app.get("/test", (req, res) => {
    const categories = ["hello","world"];
    res.status(200).send({
        success:true,
        message:"All Categories List",
        categories
    })
})




app.use("/api/v1/course", courseRoutes);




app.listen(process.env.PORT, () => {
    console.log("Server is running on port 8080");
})
