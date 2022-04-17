const Employee=require("../model/Employee")
const jwt=require("jsonwebtoken")


const isAuthEmp=async(req,res,next)=>{
    try {
        const token= req.header("Authorization")
        if(!token){
            return res.status(401).send({errors:[{msg:"Not Autherized"}]})
        }
        const decoded= jwt.verify(token,process.env.SECRET_KEY)
        const foundEmployee=await Employee.findOne({_id:decoded.id})
        if(!foundEmployee){
            return res.status(401).send({errors:[{msg:"Not Autherized"}]})
        }
        req.employee=foundEmployee
        next()
    } catch (error) {
        return res.status(401).send({errors:[{msg:"Not Autherized"}]})
    }
}
module.exports=isAuthEmp