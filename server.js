const express = require('express')
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require('dotenv').config()
const URL = process.env.MONGO_URL
const path = require('path')

app.use(express.json())
app.use(morgan('dev'))


const connectToDb = async () => {
    try {
        await mongoose.connect(URL)
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
}

connectToDb()

app.use("/students", require("./routes/studentRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => console.log("the server is running on port 9000"))
