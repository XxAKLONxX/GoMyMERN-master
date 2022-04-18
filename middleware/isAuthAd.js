const jwt=require("jsonwebtoken")
const Admin = require("../model/Admin")


const isAuthAd=async(req,res,next)=>{
    try {
        const token= req.header("   ")
        if(!token){
            return res.status(401).send({errors:[{msg:"Not Autherized"}]})
        }
        const decoded= jwt.verify(token,process.env.SECRET_KEY)
        const foundAdmin=await Admin.findOne({_id:decoded.id})
        if(!foundAdmin){
            return res.status(401).send({errors:[{msg:"Not Autherized"}]})
        }
        req.admin=foundAdmin
        next()
    } catch (error) {
        return res.status(401).send({errors:[{msg:"Not Autherized"}]})
    }
}
module.exports=isAuthAd