const express = require("express");
const { signupUser, signinUser, getuser } = require("../controllers/user");
const isAuth = require("../middleware/isAuth");
const { registerValidator, Validation, loginValidator } = require("../middleware/validator");

const router = express.Router()


router.post("/signupuser",registerValidator(),Validation,signupUser)
router.get("/UsersList",getuser)
router.post("/signinuser",loginValidator(),Validation,signinUser)
router.get("/currentUser", isAuth, (req, res) => {
    res.send(req.user)
   
  })





module.exports = router