import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";

import { Button } from "@/app/components/ui/button";
import { FaPlus } from "react-icons/fa6";

import { getTransactionTypes } from "../lib/actions/Transactions";

import { auth } from "@/auth";
import TransactionForm from "./TransactionForm";

async function TransactionsTableFooter() {
  const types = await getTransactionTypes();
  const session = await auth();

  const typesForProps = types?.map(
    (type: { id: { toString: () => string }; name: string }) => ({
      id: type.id.toString(),
      name: type.name,
    })
  );
  // console.log(typesForProps);
  return (
    <section className="bg-secondary border-1 rounded-b-xl p-2 flex items-center ">
      <div className=" w-full flex justify-between p-1 px-2">
        SALDO <span>$2.500,00</span>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className=" rounded-full hover:bg-secondary-foreground">
            <FaPlus />
          </Button>
        </DialogTrigger>
        <DialogContent className="m-3 bg-gradient-to-tr from-[#5eabc3] to-[#0c697d] rounded-3xl p-8 grid gap-5">
          <DialogHeader>
            <DialogTitle className="text-3xl text-center font-bold">
              Cadastrar Transação
            </DialogTitle>
          </DialogHeader>
          <TransactionForm
            userId={session?.user?.id?.toString()}
            types={typesForProps}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default TransactionsTableFooter;
