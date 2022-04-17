const mongoose = require('mongoose')

const {Schema} =mongoose

const employeeSchema = new Schema({
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
    password:{
        type:String,
        required:true,
        minlength:8,
    },
})
module.exports=Employee=mongoose.model("/employee",employeeSchema)