const Admin=require("../model/Admin")


exports.signinAd=async(req,res)=>{
   try {
       const {email,password} = req.body
       const foundAdmin= await Admin.findOne({email})
       if(!foundAdmin){
        return res.status(400).send({errors:[{msg:"Wrong Data"}]})
       }
       return res.status(200).send({msg:"Login validated",admin:foundAdmin})
   } catch (error) {
    return res.status(400).send({msg:"Login failed"})
   }
}