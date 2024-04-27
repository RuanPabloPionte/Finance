import { connectToDB } from "../utils";
import { TransactionType, Transaction } from "../models/transactions";
import { User, IUser } from "../models/user";
import { revalidatePath } from "next/cache";
import { HydratedDocument, Types } from "mongoose";

const getTransactionTypes = async (id?: Types.ObjectId) => {
  try {
    await connectToDB();

    if (id) {
      const transactionTypes = await TransactionType.findById(id);
      return transactionTypes;
    }

    const transactionTypes = await TransactionType.find();
    return transactionTypes;
  } catch (error) {
    console.error("Error getting transaction types", error);
  }
};

const setTransaction = async (formData: FormData) => {
  const { userId, name, source, value, types, action } =
    Object.fromEntries(formData);

  const user: IUser | null = await User.findById(userId);

  if (!user) return null;

  try {
    connectToDB();

    const newTransaction = {
      name,
      type: types,
      source,
      value: parseFloat(String(value)),
    };

    const WithdrawalId = "66250517e747a01b58a2a216";

    if (newTransaction.type === WithdrawalId) {
      newTransaction.value = -Math.abs(newTransaction.value);
    }

    const lastTransaction = await Transaction.create(newTransaction);

    user?.transactions?.push(lastTransaction);
    await user.save();
    revalidatePath("/");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create transaction!");
  }
};

const deleteTransaction = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  if (!id) throw new Error("Id não informado!");

  try {
    connectToDB();

    const deletedTransaction = await Transaction.findByIdAndDelete(id);
    // console.log(deletedTransaction);
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};

export { getTransactionTypes, setTransaction, deleteTransaction };
