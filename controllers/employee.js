const Employee=require("../model/Employee")
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')





exports.signupEmployee=async(req,res)=>{
   try {
       const { name, lastName,  email, password} = req.body
       const foundEmployee=await Employee.findOne({email})
       if((foundEmployee)){
           return res.status(400).send({errors:[{msg:"email already exist"}]})
       }
    //    nb
       const saltRounds = 10
       const hashedPassword= await bcrypt.hash(password,saltRounds)
       const  newEmployee= new Employee({...req.body})
       newEmployee.password=hashedPassword
       await newEmployee.save() 
       const token=jwt.sign({id:newEmployee._id},process.env.SECRET_KEY,{expiresIn:"100days"}) 
       
       return res.status(200).send({msg:"Account created waiting for validation" , employee:newEmployee,token})
   } catch (error) {
    return res.status(400).send({msg:"Please retry",error})
   }
}
exports.signinEmployee=async(req,res)=>{
   try {
       const {email,password} = req.body
       const foundEmployee= await Employee.findOne({email})
       if(!foundEmployee){
        return res.status(400).send({errors:[{msg:"Wrong Data"}]})
       }
    
       const foundPassword= await bcrypt.compare(password,foundEmployee.password)
       if(!foundPassword){
        return res.status(400).send({errors:[{msg:"Wrong Data"}]}) 
       }
       const token=jwt.sign({id:foundEmployee._id},process.env.SECRET_KEY) 
       return res.status(200).send({msg:"Login validated",employee:foundEmployee,token})
   } catch (error) {
    return res.status(400).send({msg:"Login failed"})
   }
}
exports.getemployee=async (req, res) => {
    try {
      const employees = await Employee.find();
     return res.status(200).send({ msg: "liste", employees });
    } catch (error) {
      res.status(400).send({ msg: "error", error });
    }
  };
  exports.getOneEmployee=async(req,res)=>{
    try {
      const foundEmployee = await Employee.findById(req.params.id);
      if (!foundEmployee) {
        return res.status(400).send({ errors: [{ msg: "failed" }] });
      }
      
      return res.status(200).send({ msg: "done ", foundEmployee: foundEmployee });
    } catch (error) {
      return res.status(400).send({ msg: "error get " });
    }
  }