const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const cors = require('cors');

const userRoute = require("./controllers/users")
const auth = require("./middleware/auth");

const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()

app.use("/user",userRoute)


  app.get("/temp",(req,res)=>{
    console.log(req.get("authorization"))
  })


const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 5000
  
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))