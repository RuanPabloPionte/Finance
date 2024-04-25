import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

import { Button } from "@/app/components/ui/button";

import { HiDotsVertical } from "react-icons/hi";
import { FaTrashCan, FaPen } from "react-icons/fa6";
import { getUser } from "../lib/actions/user";
import { auth } from "@/auth";
import { Session } from "next-auth";
import { getTransactionTypes } from "../lib/actions/Transactions";

async function TransactionsTable() {
  const session: Session | null = await auth();
  const user = await getUser(session?.user?.id);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">NOME</TableHead>
          <TableHead>DESTINO</TableHead>
          <TableHead>TIPO</TableHead>
          <TableHead className="text-right">VALOR</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {user.transactions.map(async (item: any) => {
          const transactionTypes = await getTransactionTypes(item.type);
          return (
            <TableRow
              key={item.id}
              className={`${
                item.value < 0 ? "text-red-500" : "text-emerald-500"
              }`}
            >
              <TableCell className="font-medium">
                {item.name.toLocaleUpperCase()}
              </TableCell>
              <TableCell>{item.source.toLocaleUpperCase()}</TableCell>
              <TableCell>{transactionTypes.name}</TableCell>
              <TableCell className={`text-right `}>{item.value}</TableCell>
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger>
                    <HiDotsVertical />
                  </PopoverTrigger>
                  <PopoverContent className="my-2 mx-4 w-[30vw]">
                    <h1 className="text-center">Ações disponiveis</h1>
                    <div className="mt-2 grid gap-4">
                      <Button>
                        DELETAR <FaTrashCan className="mx-2" />
                      </Button>
                      <Button>
                        EDITAR <FaPen className="mx-2" />
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default TransactionsTable;
