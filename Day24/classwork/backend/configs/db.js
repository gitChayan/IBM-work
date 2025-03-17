const mongoose=require("mongoose");

const connectDB=mongoose.connect("mongodb://127.0.0.1:27017/IBM");


module.exports={
    connectDB
}
// main()
//     .then(()=>{
//         console.log("MongoDb is connected");
//     })

//     //connecting to mongodb through mongoose
// async function main () {
//     await mongoose.connect('mongodb://127.0.0.1:27017/test');
// }