import { Schema, model, models, Document } from "mongoose";
import { ITransaction } from "./transactions";

export interface IPopulateUser extends Document {
  username: string;
  email: string;
  password: string;
  transactions: [ITransaction];
}

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  transactions?: ITransaction[];
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  transactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Transaction",
    },
  ],
});

export const User = models?.User || model<IUser>("User", userSchema);
