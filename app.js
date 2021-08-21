const express = require("express")
require("dotenv").config()
const connection = require("./utils/connection.js")

const userRoute = require("./users/routes")

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())


// Test Route
app.get("/", (req,res)=>{
    res.json({
        message: "Welcome to Planner API",
        success: true
    })
    res.end()
})

// Route
app.use("/user", userRoute)

connection().then(()=>{
    app.listen(port,()=>{
        console.log(`Listening at port http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log(err)
})