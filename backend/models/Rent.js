const mongoose = require("mongoose")

const RentSchema = mongoose.Schema({
    category: String,
    categoryItem: String,
    quantity: Number,
    rentedOn: Date,
    amount: Number,
    userId: String,
    daysRented: Number
})

const rentModel = mongoose.model('rentModel', RentSchema)
module.exports = rentModel