const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const cors = require('cors');
const logger = require('./middleware/logger')
const middleware = require('./middleware/middleware')

const userRoute = require("./controllers/users")
const rentRoute = require("./controllers/rent")

const app = express()

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
dotenv.config()

app.use("/user",userRoute)
app.use("/rent",rentRoute)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const DB_URL = process.env.NODE_ENV === 'test' ? process.env.TEST_DB_URL : process.env.DB_URL
const PORT = process.env.PORT || 5000 
console.log(DB_URL)
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => logger.info(`Server running on port: ${PORT}`)))
    .catch((error) => logger.error(error.message))

module.exports = app;