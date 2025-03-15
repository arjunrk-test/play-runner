"use client"
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ActionTable = () => {
   const [rows, setRows] = useState([
      { id: 1, action: "", elementType: "", elementValue: "" },
   ]);

   const addRow = () => {
      setRows((prev) => [
         ...prev,
         { id: prev.length + 1, action: "", elementType: "", elementValue: "" },
      ]);
   };

   const updateRow = (index, field, value) => {
      const updatedRows = [...rows];
      updatedRows[index][field] = value;
      setRows(updatedRows);
   };

   const deleteRow = (index) => {
      if (rows.length > 1) {
         const updatedRows = rows.filter((_, i) => i !== index);
         setRows(updatedRows);
      }
   };

   return (
      <div className="overflow-auto bg-muted p-2 ">
         <Table>
            <TableHeader >
               <TableRow >
                  <TableHead className="text-black bg-accentDark sticky top-0 ">Add Row</TableHead>
                  <TableHead className="text-black sticky top-0 bg-accentDark ">Action</TableHead>
                  <TableHead className="text-black sticky top-0 bg-accentDark ">Element Type</TableHead>
                  <TableHead className="text-black sticky top-0 bg-accentDark ">Element Value</TableHead>
                  <TableHead className="text-black sticky top-0 bg-accentDark">Delete Row</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {rows.map((row, index) => (
                  <TableRow key={row.id}>
                     <TableCell>
                        <Button
                           onClick={addRow}
                           variant="ghost"
                           className="text-green-500 transition-all duration-300"
                        >
                           <MdAddCircleOutline />
                        </Button>
                     </TableCell>

                     <TableCell>
                        <Select
                           value={row.action}
                           onValueChange={(value) =>
                              updateRow(index, "action", value)
                           }
                        >
                           <SelectTrigger className="w-full h-5 bg-input">
                              <SelectValue placeholder="Actions" />
                           </SelectTrigger>
                           <SelectContent className="bg-input">
                              <SelectItem value="click">Click</SelectItem>
                              <SelectItem value="assertion">Assertion</SelectItem>
                              <SelectItem value="moveToElement">Move to element</SelectItem>
                           </SelectContent>
                        </Select>
                     </TableCell>

                     <TableCell>
                        <Select
                           value={row.elementType}
                           onValueChange={(value) =>
                              updateRow(index, "elementType", value)
                           }
                        >
                           <SelectTrigger className="w-full h-5 bg-input">
                              <SelectValue placeholder="Selectors" />
                           </SelectTrigger>
                           <SelectContent className="bg-input">
                              <SelectItem value="css">CSS</SelectItem>
                              <SelectItem value="xpath">XPath</SelectItem>
                           </SelectContent>
                        </Select>
                     </TableCell>

                     <TableCell>
                        <Input
                           value={row.elementValue}
                           onChange={(e) =>
                              updateRow(index, "elementValue", e.target.value)
                           }
                           placeholder="Element Value"
                           className="text-white h-5"
                        />
                     </TableCell>

                     <TableCell>
                        {index !== 0 && (
                           <Button
                              onClick={() => deleteRow(index)}
                              variant="ghost"
                              className="text-red-500 transition-all duration-300"
                           >
                              <MdDeleteOutline />
                           </Button>
                        )}
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   );
}

export default ActionTable;