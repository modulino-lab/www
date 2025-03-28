"use client";

import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import ProductCard from "./components/card";

interface Product {
  id: number;
  name: string;
  price: string;
}

const data: Product[] = [
  { id: 1, name: "Product A", price: "$10" },
  { id: 2, name: "Product B", price: "$20" },
  { id: 3, name: "Product C", price: "$30" },
];

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Product Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: (info) => info.getValue(),
  },
];

export default function ProductTable() {
  const [filter, setFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { globalFilter: filter },
    onGlobalFilterChange: setFilter,
  });

  return (
    <div className="container-wrapper">
      <div className="p-4 container">
        <Input
          placeholder="Search products..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-4"
        />
        <div className="grid grid-cols-1 gap-4">
          {table.getRowModel().rows.map((row) => (
            <ProductCard key={row.original.id} row={row} />
          ))}
        </div>
      </div>
    </div>
  );
}
