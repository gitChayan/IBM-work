const login=(req,res)=>{
    const data=req.body;
    try {
        if(data.email=="" && data.password==""){
            return res.status(400).json({message:"Data not found"});
        }else{
            return res.status(200).json({message:"User login successfully"})
        }
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const signUp=(req,res)=>{
    const data=req.body;
    try {
        if(data.email=="" && data.password==""){
            return res.status(400).json({message:"Data not found"});
        }else{
            return res.status(200).json({message:"User login successfully"});
        }
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
module.exports={login,signUp}