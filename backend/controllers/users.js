const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require("../middleware/auth");

const userModel = require("../models/User")

const userRouter = express.Router();


userRouter.post('/register', async (req, res) => {
    const { username,number, password } = req.body
  
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const newUser = new userModel({name:username, phone:number, hash:passwordHash})
  
    try{
        await newUser.save()
        res.status(201).json({username,number})
    }
    catch(e){
        res.status(409).json(e.code)
    }
})
  
  
userRouter.post('/login', async (req, res) => {

    const { username, password } = req.body

    let user;
    try{
         user = await userModel.findOne({name:username})
    }
    catch(e){
        res.status(404).json({ message: e.message });
    }

    const passwordCorrect = user === undefined
    ? false 
    : await bcrypt.compare(password, user.hash)

    if (!(user && passwordCorrect)) {
    return res.status(401).json({
        error: 'invalid username or password'
    })
    }

    const userForToken = {
        username: user.name,
        id: user._id,
    }

    const token = jwt.sign(userForToken, process.env.SECRET,{ expiresIn: 60*15 })

    res
    .status(200)
    .send({ token, username: user.username, name: user.name })
})

module.exports = userRouter
