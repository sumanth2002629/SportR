const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require("../middleware/auth");

const userModel = require("../models/User")

const userRouter = express.Router();


userRouter.post('/register', async (req, res) => {
    const { username,number, password } = req.body
    console.log("hi")
    // const saltRounds = 10
    console.log("here is ", password)
    // try{
    //     const passwordHash = bcrypt.hashSync(password, saltRounds)
    // }
    // catch(e){
    //     console.log(e)
    //     res.status(409).json(e.code)
    // }
    console.log("hi2")
    const newUser = new userModel({name:username, phone:number, hash:password})
    console.log("hi3")
    try{
        console.log("hi4")
        await newUser.save()
        console.log("hi5")
        res.status(201).json({username,number})
        console.log("hi6")
    }
    catch(e){
        console.log("hi7")
        res.status(409).json(e.code)
        console.log("hi8")
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

    const passwordCorrect = user === null
    ? false 
    : password===user.hash

    if (!(user && passwordCorrect)) {
    return res.status(401).json({
        error: 'invalid username or password'
    })
    }

    const userForToken = {
        username: user.name,
        id: user._id,
    }

    const token = jwt.sign(userForToken, process.env.SECRET,{ expiresIn: 60*1 })

    res
    .status(200)
    .send({ token, username: user.username, name: user.name })
})

userRouter.post("/changePassword", auth, async (req,res)=>{
    const { username, oldPassword, newPassword } = req.body

    let user;
    try{
         user = await userModel.findOne({name:username})
    }
    catch(e){
        res.status(404).json({ message: e.message });
    }

    const passwordCorrect = user === null
    ? false 
    : await bcrypt.compare(oldPassword, user.hash)

    if (!(user && passwordCorrect)) {
    return res.status(401).json({
        error: 'invalid username or password'
    })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(newPassword, saltRounds)

    try{
        await userModel.updateOne({name:username}, {hash:passwordHash});
        res.status(200).json({message:"Password changed successfully"});
    }
    catch(e){
        res.status(409).json({message:e.message});
    }
})

userRouter.delete("/deleteUser", auth, async (req,res)=>{
    const username = req.user.username

    let user;
    try{
         user = await userModel.findOne({name:username})
    }
    catch(e){
        res.status(404).json({ message: e.message });
    }

    if (!(user)) {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }

    try{
        await userModel.deleteOne({name:username});
        res.status(200).json({message:"User deleted successfully"});
    }
    catch(e){
        res.status(409).json({message:e.message});
    }
})

module.exports = userRouter
