import { connectToDB } from "../utils";
import { TransactionType } from "../models/transactions";
// Importe o modelo TransactionType do arquivo que contém as definições de schema

// Função para criar tipos de transação
const createTransactionTypes = async () => {
  try {
    await connectToDB(); // Conectar ao banco de dados

    // Array com os tipos de transação a serem criados
    const typesToCreate = [
      { name: "Deposit" },
      { name: "Investment" },
      { name: "Withdrawal" }, // Corrigido "Withdrawal" conforme mencionado
    ];

    // Criar os tipos de transação
    await TransactionType.create(typesToCreate);

    console.log("Transaction types created successfully.");
  } catch (error) {
    console.error("Error creating transaction types:", error);
  }
};

const getTransactionTypes = async () => {
  try {
    await connectToDB();

    const transactionTypes = await TransactionType.find();
    return transactionTypes;
  } catch (error) {
    console.error("Error getting transaction types", error);
  }
};
export { createTransactionTypes, getTransactionTypes };

// console.log(depositTransactionType);

// // Create a deposit transaction
// const depositTransaction = new Transaction({
//   name: 'Deposit transaction',
//   type: depositTransactionType._id, // Reference to the 'Deposit' transaction type document
//   source: 'Some source',
//   value: 100, // Example value
// });

// // Save the deposit transaction to the database
// await depositTransaction.save();
