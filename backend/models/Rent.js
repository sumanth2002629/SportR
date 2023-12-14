const mongoose = require("mongoose")

const RentSchema = mongoose.Schema({
    category: String,
    item: String,
    quantity: Number,
    rentedOn: Date,
    amount: Number,
    userId: String,
    rentedTill: Date
})

const rentModel = mongoose.model('rentModel', RentSchema)
module.exports = rentModel