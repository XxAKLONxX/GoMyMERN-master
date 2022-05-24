const Ticket = require('../model/Ticket')





exports.addTicket=async(req,res)=>{
    try {
        const {place,time,comment} = req.body
        const foundTicket=await Ticket.findOne({place,time,comment})
        if((foundTicket)){
            
            return res.status(400).send({errors:[{msg:"Ticket already exist"}]})
        }
        
        const  newTicket= new Ticket({...req.body})
    
        await newTicket.save()
        ;
        
        // const token=jwt.sign({id:newTicket._id},process.env.SECRET_KEY,{expiresIn:"100days"}) 
        
        return res.status(200).send({msg:"Ticket created succssessfully" , ticket:newTicket})
        
        
    } catch (error) {
     return res.status(400).send({msg:"Please retry"})
    }
}
exports.getTicket=async (req, res) => {
       try {
         const tickets = await Ticket.find();
        return res.status(200).send({ msg: "liste", tickets });
       } catch (error) {
         res.status(400).send({ msg: "error", error });
       }
     };