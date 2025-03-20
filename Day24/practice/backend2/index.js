const express=require("express");

const mongoose=require("mongoose");
const chat=require("./models/chat.js");
const path=require("path");

const app=express();
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main()
    .then(()=>{
        console.log("MongoDb is connected");
    })

async function main(){
        await mongoose.connect('mongodb://127.0.0.1:27017/chat');
    
}

const chat1=new chat({
    from:"chayan",
    to:"ayan",
    message:"ki koris",
    created:Date.now()
})
chat1.save()
     .then((res)=>{
        console.log(res);
 }).catch(()=>{
        console.log("Error");
    });
    
app.get("/",(req,res)=>{
    res.status(200).send("hello server");
})
app.listen(8080,()=>{
    console.log("server is running");
})