const User=require("../model/User")
const jwt=require("jsonwebtoken")


const isAuth=async(req,res,next)=>{
    try {
        const token= req.header("   ")
        if(!token){
            return res.status(401).send({errors:[{msg:"Not Autherized"}]})
        }
        const decoded= jwt.verify(token,process.env.SECRET_KEY)
        const foundUser=await User.findOne({_id:decoded.id})
        if(!foundUser){
            return res.status(401).send({errors:[{msg:"Not Autherized"}]})
        }
        req.user=foundUser
        next()
    } catch (error) {
        return res.status(401).send({errors:[{msg:"Not Autherized"}]})
    }
}
module.exports=isAuth