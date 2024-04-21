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

const data = [
  {
    category: "GASOLINA",
    source: "PIC PAY",
    type: "deposit/whidraw",
    amount: "-$60.00",
  },
  { category: "pneu", source: "PIC PAY", amount: "-$250.00" },
];

function TransactionsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">NOME</TableHead>
          <TableHead>INSTITUIÇÃO</TableHead>
          <TableHead className="text-right">VALOR</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              {item.category.toLocaleUpperCase()}
            </TableCell>
            <TableCell>{item.source.toLocaleUpperCase()}</TableCell>
            <TableCell className="text-right">{item.amount}</TableCell>
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
        ))}
      </TableBody>
    </Table>
  );
}

export default TransactionsTable;
