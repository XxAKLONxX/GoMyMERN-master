const { validationResult, check } = require("express-validator")





exports.registerValidator=()=>[
    check("name","name is required").notEmpty(),
    check("email","email must be valid").isEmail(),
    check("password","password should be at least 8 ").isLength({min:8}).notEmpty()
]
exports.loginValidator=()=>[
    check("email","email must be valid").isEmail(),
    check("password","password should be at least 8 ").isLength({min:8}).notEmpty()
]

exports.Validation=async(req,res,next)=>{
    const error=validationResult(req)
    if(!error.isEmpty()){
        res.status(200).json({errors:error.array()})
    }
    next()
}