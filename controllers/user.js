const User=require("../model/User")
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const jsonwebtoken = require("jsonwebtoken")

exports.signupUser=async(req,res)=>{
   try {
       const { name, lastName,  email, phoneNo, password} = req.body
       const foundUser=await User.findOne({email})
       if((foundUser)){
        console.log(foundUser)
           return res.status(400).send({errors:[{msg:"email already exist"}]})
       }
       const saltRounds = 10
       const hashedPassword= await bcrypt.hash(password,saltRounds)
       const  newUser= new User({...req.body})
       newUser.password=hashedPassword
       await newUser.save()
       const token=jwt.sign({id:newUser._id},process.env.SECRET_KEY,{expiresIn:"100days"}) 
       
       return res.status(200).send({msg:"Account created waiting for validation" , user:newUser,token})
       
       
   } catch (error) {
    return res.status(400).send({msg:"Please retry"})
   }
}
exports.signinUser=async(req,res)=>{
   try {
       const {email,password} = req.body
       const foundUser= await User.findOne({email})
       if(!foundUser){
        return res.status(400).send({errors:[{msg:"Wrong Data"}]})
       }
       const foundPassword= await bcrypt.compare(password,foundUser.password)
       if(!foundPassword){
        return res.status(400).send({errors:[{msg:"Wrong Data"}]})
       }
       const token=jwt.sign({id:foundUser._id},process.env.SECRET_KEY)
       return res.status(200).send({msg:"Login validated",user:foundUser,token})
   } catch (error) {
    return res.status(400).send({msg:"Login failed"})
   }
}
exports.getuser=async (req, res) => {
    try {
      const users = await User.find();
     return res.status(200).send({ msg: "liste", users });
    } catch (error) {
      res.status(400).send({ msg: "error", error });
    }
  };