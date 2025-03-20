const mongoose=require("mongoose");
const chat=require("./models/chat.js");


main()
    .then(()=>{
        console.log("MongoDb is connected");
    })

async function main(){
        await mongoose.connect('mongodb://127.0.0.1:27017/chat');
    
}

const chat1=[
    {
    from:"chayan",
    to:"ayan",
    message:"ki koris",
    created:Date.now()
    },
    {
        from:"chayan",
        to:"ayan",
        message:"kmon achis",
        created:Date.now()
        },
        {
            from:"chayan",
            to:"ayan",
            message:"ki nasta korli",
            created:Date.now()
            }, 
            {
                from:"chayan",
                to:"ayan",
                message:"ki koris",
                created:Date.now() 
      },
      {
        from:"ayan",
        to:"chayan",
        message:"valo,tui kmon",
        created:Date.now()
        },
        {
            from:"ayan",
            to:"chayan",
            message:"holi kmon katlo",
            created:Date.now()
            },
]
// chat1.save()
//      .then((res)=>{
//         console.log(res);
//  }).catch(()=>{
//         console.log("Error");
//     });

chat.insertMany(chat1);
   