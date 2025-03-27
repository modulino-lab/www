"use client";

import { useCounterStore } from "@/store/counter-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

const Counter = () => {
  const { count, increment, decrement, setCount } = useCounterStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "") {
      setCount(1);
    } else {
      const value = parseInt(e.target.value, 10);
      if (value > 9999) {
        setCount(9999);
      } else if (!isNaN(value)) {
        setCount(value);
      }
    }
  };

  return (
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
        type="text"
        pattern="[0-9]*"
        className="w-16 text-center bg-background focus:outline-none appearance-none"
      />
      <Button
        variant="outline"
        onClick={increment}
        className="h-8 w-8 text-lg font-semibold"
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Counter;
