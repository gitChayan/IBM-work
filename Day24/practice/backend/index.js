const mongoose= require("mongoose");  //importing mongoose

main()
    .then(()=>{
        console.log("MongoDb is connected");
    })

    //connecting to mongodb through mongoose
async function main () {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
//creating schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:Number,
    age:Number,
})
//creating model
const user=mongoose.model("user",userSchema);
//inserting single data
// const user1=new user({
//     name:"chayan",
//     email:"chayan@gmail.com",
//     password:1323,
//     age:21
// })
//inserting multiple data
//  user.insertMany([
//     {name:"chayan",email:"chaya@gmail.com",password:122322,age:30},
//     {name:"nayan",email:"chaya2@gmail.com",password:12322,age:34},
//     {name:"shayan",email:"chaya1@gmail.com",password:12242,age:21},
// ]).then((res)=>{
//     console.log(res);
// })
//saving data
//user1.save();
// user1.save()
//   .then((res)=>{
//         console.log(res);
//   }).catch(()=>{
//     console.log("error");
//   })

//finding data
// user.findById('67d462cfa63ba051ec287faa')
//   .then((res)=>{
//         console.log(res);
//   }).catch(()=>{
//     console.log("error");
//   })
user.updateOne({name:"chayan"},{name:"chayan roy"})
    .then((res)=>{
        console.log(res);
    }).catch(()=>{
        console.log("error");
    })