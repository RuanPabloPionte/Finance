import MonthsCarousel from "@/app/components/MonthsCarousel";
import TransactionsTableFooter from "@/app/components/TransactionsTableFooter";
import TransactionsTable from "@/app/components/TransactionsTable";

function Finance() {
  return (
    <section className=" m-4">
      {/* transactions */}
      <div className="border-x-2 border-t-2  border-secondary-foreground rounded-t-xl ">
        <MonthsCarousel />
        <TransactionsTable />
      </div>
      <TransactionsTableFooter />
    </section>
  );
}

export default Finance;
