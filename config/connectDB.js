const mongoose  = require("mongoose");

const connect=async()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log('Data base connected');
        
    } catch (error) {
        console.log('data base did not connected');
        
    }
}
module.exports= connect