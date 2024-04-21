import mongoose from "mongoose";

// Define schema for transaction types
const transactionTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

// Create model for transaction types
const TransactionType =
  mongoose.models.TransactionType ||
  mongoose.model("TransactionType", transactionTypeSchema);

// Define schema for transactions
const transactionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TransactionType",
    required: true,
  },
  source: { type: String, required: true },
  value: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
});

// Create model for transactions
const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);

export { Transaction, TransactionType };
