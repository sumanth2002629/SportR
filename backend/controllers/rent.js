const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require("../middleware/auth");

const rentModel = require("../models/Rent")

const rentRouter = express.Router();

rentRouter.post("/rentItem", auth, async (req,res)=>{
    data = {...req.body, userId: req.user.id};

    const newRent = new rentModel(data); 

    try{
        await newRent.save();
        res.status(201).json({message:"Item rented successfully"});
    }
    catch(e){
        res.status(409).json({message:e.message});
    }    
    
})

rentRouter.get("/rentedItems", auth, async (req,res)=>{
    try{
        const rentedItems = await rentModel.find({userId:req.user.id});
        res.status(200).json(rentedItems);
    }
    catch(e){
        res.status(404).json({message:e.message});
    }
})

module.exports = rentRouter