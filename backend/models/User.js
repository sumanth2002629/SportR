const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: {type:String, unique:true},
    phone: String,
    hash:String
})

const userModel = mongoose.model('UserModel', UserSchema)
module.exports = userModel