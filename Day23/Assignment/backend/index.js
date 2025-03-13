const express = require('express'); 
const userRouter = require('./routes/user.route');
// const products = require("./data");
const app = express(); 
const PORT = 3030; 
app.use(express.json()); 


app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Store");

});

app.use(userRouter);

app.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`); 
});