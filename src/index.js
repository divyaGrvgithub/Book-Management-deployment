const express = require("express")
const routes = require("./routes/route.js")
const mongoose = require("mongoose")
const multer = require("multer")
const app = express()

app.use(express.json())
app.use(multer().any())

mongoose.set("strictQuery",true)
mongoose.connect("mongodb+srv://divyamala_:Dt25042000knp@divyamala.0cofsch.mongodb.net/group9Database")

.then(()=>console.log("MongoDb is Connected"))
.catch((err=>console.log(err)))

app.use("/",routes)

app.listen(3000,()=>{
    console.log("Express App Running on Port 3000")
})