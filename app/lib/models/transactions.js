const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema({
    name:{type: String, require: true},
    value:{type: Number, require: true},
    createdAt:{type: Date, default: Date.now()},
})

export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction",TransactionSchema)