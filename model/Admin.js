const mongoose = require('mongoose')

const {Schema} =mongoose

const adminSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phoneNo:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
})
module.exports=Admin=mongoose.model("/admin",adminSchema)