import { PricingTable } from "@clerk/nextjs";
import { Spinner } from "../ui/spinner";

interface PricingCardsProps {
  compact?: boolean;
}

export function PricingCards({ compact = false }: PricingCardsProps) {
  return (
    <div className="flex justify-center w-full">
      <div className={compact ? "max-w-4xl w-full" : "max-w-5xl w-full"}>
        <PricingTable
          appearance={{
            elements: {
              pricingTableCardHeader: {
                backgroundColor: "#6A47FB",
                color: "white",
              },
              pricingTableCardTitle: {
                fontSize: compact ? "1.5rem" : "2rem",
                fontWeight: "bold",
                color: "white",
              },
              pricingTableCardDescription: {
                fontSize: compact ? "0.875rem" : "1rem",
                color: "white",
              },
              pricingTableCardFee: {
                color: "white",
              },
              pricingTableCardFeePeriod: {
                color: "white",
              },
            },
          }}
          fallback={
            <div className="flex items-center justify-center py-12">
              <Spinner className="size-10" />
            </div>
          }
        />
      </div>
    </div>
  );
}
