"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";

export default function BuildPage() {
  const [rows, setRows] = useState([]);

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      { id: prev.length + 1, browser: "Chrome", url: "https://example.com", result: "Pending" },
    ]);
  };

  return (
    <div className="p-6 relative">
      <div className="sticky top-0 z-10 flex justify-end p-2 rounded-md bg-[#f2f2f2] shadow-md">
         <Button 
            variant="outline" 
            className="ml-2 cursor-pointer bg-[#FFD700] text-black" 
            onClick={addRow} > Add Test </Button>
         <Button variant="destructive" className="ml-2">Delete</Button>
      </div>
      <Table className="text-black">
        <TableHeader className="stick">
          <TableRow >
            <TableHead>S.No</TableHead>
            <TableHead>Browser</TableHead>
            <TableHead>URL</TableHead>
            <TableHead>Result</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.browser}</TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell>{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
      </Table>
    </div>
  );
}



