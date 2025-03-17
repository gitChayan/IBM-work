const express=require("express");
const { signUp } = require("../controller/user.controller");

const userRouter=express.Router();

userRouter.post("/register",signUp)
// userRouter.post("/login",login)

module.exports={
    userRouter
}