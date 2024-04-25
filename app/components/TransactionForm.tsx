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

import { setTransaction } from "../lib/actions/Transactions";

type TransactionProps = {
  types: any[] | undefined;
  userId: string | undefined;
};

function TransactionForm({ types, userId }: TransactionProps) {
  // console.log(userId);
  async function handleSubmit(formData: FormData) {
    "use server";
    // console.log(formData);
    setTransaction(formData);
  }
  if (!types) return null;
  return (
    <form action={handleSubmit}>
      <input name="userId" type="text" value={userId} />
      <div className="flex flex-col gap-2 my-3">
        <FormInput type="text" name="name" placeHolder="Nome" />
        <FormInput type="text" name="source" placeHolder="Origem/Destino" />
      </div>
      <div className="flex justify-center items-center gap-3 mb-3">
        <FormInput type="number" name="value" placeHolder="Valor" />
        <Select name="types">
          <SelectTrigger className="max-w-[40%] border-[3px] rounded-xl placeholder:text-slate-200 bg-transparent">
            <SelectValue placeholder="Escolha um Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Type</SelectLabel>
              {types ? (
                types.map((type) => (
                  <SelectItem key={type?.id} value={type?.id}>
                    {type?.name}
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="Deposit">Não há tipos</SelectItem>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        name="action"
        value="add"
        className="bg-background text-foreground rounded-[0.5rem]"
      >
        ENVIAR
      </Button>
    </form>
  );
}

export default TransactionForm;
