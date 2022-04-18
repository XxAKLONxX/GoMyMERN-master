const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    place:{
        type:String,
        required:true,
    },
    time:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
        required:true,
        unique:true,
    },
})


module.exports=Ticket= mongoose.model('/Ticket',ticketSchema)