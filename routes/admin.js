const express = require("express");
const { signinAd } = require("../controllers/admin");
const { loginValidator, Validation } = require("../middleware/validator");

const router = express.Router()



router.post("/signinad",loginValidator(),Validation,signinAd)



module.exports=router