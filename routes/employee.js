const express = require("express");
const {signupEmployee, signinEmployee } = require("../controllers/employee");
const isAuthEmp = require("../middleware/isAuthEmp");
const { registerValidator, Validation, loginValidator } = require("../middleware/validator");

const router = express.Router()


 router.post("/signupEmp",registerValidator(),Validation,signupEmployee)
 router.post("/signinEmp",loginValidator(),Validation,signinEmployee)
 router.get("/current",isAuthEmp,(req,res)=>{
     res.send(req.employee)
 })


module.exports=router