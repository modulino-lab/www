import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/counter";

export default function HomeSubHeader() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="hidden lg:inline-block font-bold">
        Get the <span className="italic">modulino</span> Hub
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <Counter />
        <Button className="h-10 px-6">Add to Cart</Button>
        <Button className="h-10 px-6">Go to Checkout</Button>
      </div>
    </div>
  );
}
