import { Card, CardContent } from "@/components/ui/card";
import { flexRender, Row } from "@tanstack/react-table";

interface Product {
  id: number;
  name: string;
  price: string;
}

interface ProductCardProps {
  row: Row<Product>;
}

export default function ProductCard({ row }: ProductCardProps) {
  return (
    <Card key={row.original.id} className="p-4">
      <CardContent className="flex flex-col gap-2">
        {row.getVisibleCells().map((cell) => (
          <div key={cell.id}>
            <span className="text-lg font-medium">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
