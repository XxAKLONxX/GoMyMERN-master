const express = require("express");
const { signinAd } = require("../controllers/admin");
const isAuthAd = require("../middleware/isAuthAd");
const { loginValidator, Validation } = require("../middleware/validator");

const router = express.Router();

router.post("/signinad", loginValidator(), Validation, signinAd);
router.get("/currentAdmin", isAuthAd, (req, res) => {
  res.send(req.admin);
});



module.exports = router;
