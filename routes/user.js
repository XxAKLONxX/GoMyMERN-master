const express = require("express");
const { signupUser, signinUser } = require("../controllers/user");
const isAuth = require("../middleware/isAuth");
const { registerValidator, Validation, loginValidator } = require("../middleware/validator");

const router = express.Router()

// error not solved
router.post("/signupuser",registerValidator(),Validation,signupUser)
router.post("/signinuser",loginValidator(),Validation,signinUser)
router.get("/current", isAuth, (req, res) => {
    res.send(req.user)
  })



module.exports = router