import { Schema, model, models, Types, Document } from "mongoose";

export interface ITransactionType extends Document {
  name: string;
}

export interface ITransaction extends Document {
  name: string;
  type: Types.ObjectId;
  source: string;
  value: number;
  createdAt: Date;
}

const transactionTypeSchema = new Schema<ITransactionType>({
  name: { type: String, required: true, unique: true },
});

export const TransactionType =
  models?.TransactionType ||
  model<ITransactionType>("TransactionType", transactionTypeSchema);

const transactionSchema = new Schema<ITransaction>({
  name: { type: String, required: true },
  type: {
    type: Schema.Types.ObjectId,
    ref: "TransactionType",
    required: true,
  },
  source: { type: String, required: true },
  value: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
});

export const Transaction =
  models?.Transaction || model<ITransaction>("Transaction", transactionSchema);
