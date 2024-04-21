import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import FormInput from "./FormInput";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

import { Button } from "@/app/components/ui/button";
import { FaPlus } from "react-icons/fa6";

import { getTransactionTypes } from "../lib/actions/Transactions";

async function TransactionsTableFooter() {
  const types = await getTransactionTypes();
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
          <form>
            <FormInput type="text" name="name" placeHolder="Nome" />
            <FormInput type="text" name="source" placeHolder="Origem/Destino" />
            <FormInput type="number" name="value" placeHolder="Valor" />
            <Select name="types">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Escolha um Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Type</SelectLabel>
                  {types ? (
                    types.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.name}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value="apple">Não há tipos</SelectItem>
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
            <DialogFooter>
              <Button
                type="submit"
                name="acao"
                value="add"
                className="bg-background text-foreground rounded-[0.5rem]"
              >
                ENVIAR
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default TransactionsTableFooter;
