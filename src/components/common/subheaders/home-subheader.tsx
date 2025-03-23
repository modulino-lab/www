import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";

export default function HomeSubHeader() {
  const [count, setCount] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setCount(value);
    }
  };

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1)); // Prevent count from going below 1

  return (
    <div className="flex justify-between items-center w-full">
      <div className="hidden lg:inline-block font-bold">
        Get the <span className="italic">modulino</span> Hub
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <div className="flex items-center gap-2 p-2">
          <Button
            variant="outline"
            onClick={decrement}
            className="h-8 w-8 text-lg font-semibold"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <Input
            value={count}
            onChange={handleInputChange}
            type="number"
            className="w-12 text-center bg-background"
          />
          <Button
            variant="outline"
            onClick={increment}
            className="h-8 w-8 text-lg font-semibold"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <Button className="h-10 px-6">Add to Cart</Button>
        <Button className="h-10 px-6">Go to Checkout</Button>
      </div>
    </div>
  );
}
