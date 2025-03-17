const express=require("express");
const { connectDB } = require("./configs/db");
const { userRouter } = require("./route/user.route");
const app=express();
app.use(express.json());
const PORT=8080;

app.get("/",(req,res)=>{
    res.status(200).send("Welcome");
})
app.use(userRouter)

app.listen(PORT,async()=>{
    try{
        await connectDB

        console.log("server connected");

        console.log(`server is running on server http://localhost:${PORT}`);

    }catch{
        console.log("error.message")
    }
   
})