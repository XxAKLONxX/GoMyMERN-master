// importation
const express = require("express");
// creation d'instance
const app= express()
// .env
require("dotenv").config()
// connect DataBase
const connect=require("./config/connectDB")
connect()
// json
app.use(express.json())
// route global
app.use("/api/user",require("./routes/user"))
app.use("/api/employee",require("./routes/employee"))
app.use("/api/admin",require("./routes/admin"))
app.use("/api/ticket",require("./routes/ticket"))


const port = process.env.PORT;
app.listen(port, (error) => {
  error ? console.log(error) : console.log(`the server is runinng on ${port} `);
});