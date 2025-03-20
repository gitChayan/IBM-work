
const mongoose=require("mongoose");
const { type } = require("os");

const productSchema=mongoose.Schema({
    name:{
        type:String,
       
    },
    desc:{
        type:String,
        
    },
    category:{
        type:String,
        
    },
    img:{
        type:String,
    },
    price:{
        type:Number,
    }

    
});
const productModel=mongoose.model("product",productSchema);
module.exports={
    productModel
}