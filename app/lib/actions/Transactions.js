import { connectToDB } from "../utils";
import { TransactionType, Transaction } from "../models/transactions";
import { User } from "../models/user";
import { revalidatePath } from "next/cache";

const getTransactionTypes = async (id) => {
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

const setTransaction = async (formData) => {
  const { userId, name, source, value, types, action } =
    Object.fromEntries(formData);

  const user = await User.findById(userId);

  if (!user) return null;

  try {
    connectToDB();

    const newTransaction = {
      name,
      type: types,
      source,
      value: parseFloat(value),
    };

    const WithdrawalId = "66250517e747a01b58a2a216";

    if (newTransaction.type === WithdrawalId) {
      newTransaction.value = -Math.abs(newTransaction.value);
    }

    const lastTransaction = await Transaction.create(newTransaction);
    console.log(newTransaction.value);

    user.transactions.push(lastTransaction);
    await user.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create transaction!");
  }

  revalidatePath("/Finance");
};

export { getTransactionTypes, setTransaction };
