const express = require("express");
const {signupEmployee, signinEmployee, getemployee, getOneEmployee } = require("../controllers/employee");
const isAuthEmp = require("../middleware/isAuthEmp");
const { registerValidator, Validation, loginValidator } = require("../middleware/validator");

const router = express.Router()


 router.post("/signupEmp",registerValidator(),Validation,signupEmployee)
 router.post("/signinEmp",loginValidator(),Validation,signinEmployee)
 router.get("/EmployeesList",getemployee)
 router.get("/EmployeeProfile/:id",getOneEmployee)
 router.get("/currentEmp",isAuthEmp,(req,res)=>{
     res.send(req.employee)
 })


module.exports=router