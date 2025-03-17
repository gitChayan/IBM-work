const { error } = require("console");
const { userModel } = require("../models/user.model");
const bcrypt=require("bcrypt");

const signUp= async(req,res)=>{
    const {userName,password,email}=req.body;

    try{
        bcrypt.hash(password, 5,async(err,hash)=> {
            // Store hash in your password DB.
            if(err){
                return res.status(400).send({error:error.message})
            }else{
                const userData=new userModel({userName,password:hash,email});   
                await userData.save();

                return res.status(200).send({message:"user registration successful",user:userData})

            }
        })    
    } catch(error)
        {
        return res.status(400).send({error:error.message})
    }
}
module.exports={
    signUp
}