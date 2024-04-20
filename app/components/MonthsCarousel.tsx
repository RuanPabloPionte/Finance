import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { Button } from "@/app/components/ui/button";

// const currentDate = new Date();
// const currentMonth = currentDate.getMonth() + 1; // Os meses são indexados a partir de zero
// const currentYear = currentDate.getFullYear();
// console.log(`Mês atual: ${currentMonth}, Ano atual: ${currentYear}`);

function MonthsCarousel() {
  return (
    <section className="bg-secondary border-1 rounded-t-xl px-2 flex items-center justify-center">
      <Carousel
        opts={{
          align: "center",
        }}
        className="p-1 w-[80%] max-w-sm "
      >
        <CarouselContent>
          {Array.from({ length: 12 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <div className="py-1">
                <Button
                  className={`text-secondary-foreground border border-secondary-foreground rounded-xl `}
                >
                  {`${index + 1} / 24 `}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default MonthsCarousel;
