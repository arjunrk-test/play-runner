"use client";
import PageHeader from "@/components/PageHeader";
import { Hammer } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MultiSelect from "@/components/Multiselect";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { FaCode, FaPlay, FaSave } from "react-icons/fa";


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BuildPage() {
  // Initial state with one default row
  const [rows, setRows] = useState([
    { id: 1, action: "", elementType: "", elementValue: "" },
  ]);

  // Function to add a new row
  const addRow = () => {
    setRows((prev) => [
      ...prev,
      { id: prev.length + 1, action: "", elementType: "", elementValue: "" },
    ]);
  };

  // Function to update a specific field in a row
  const updateRow = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Function to delete a specific row
  const deleteRow = (index) => {
    if (rows.length > 1) {
      const updatedRows = rows.filter((_, i) => i !== index);
      setRows(updatedRows);
    }
  };

  const browserOptions = [
    { value: "chrome", label: "Google Chrome" },
    { value: "edge", label: "Microsoft Edge" },
    { value: "safari", label: "Safari" },
  ];

  return (
    <>
      <PageHeader>
        <Hammer className="h-6 w-6 text-[#0D9488]" />
        <h3 className="text-lg font-semibold">Build</h3>
      </PageHeader>

      <div className="p-6 space-y-4 bg-primary">
        <h1 className="text-2xl font-semibold text-accentDark">
          Playwright Test Builder
        </h1>

        <nav className="bg-navbar text-navbar-text p-2">
          <div className="flex justify-start space-x-4 py-2">
            <Button
              variant="ghost"
              className="text-cyan-500 transition-all duration-500"
              aria-label="View Code"
            >
              <FaCode />
            </Button>
            <Button
              variant="ghost"
              className="text-green-500 transition-all duration-500"
              aria-label="Run Test"
            >
              <FaPlay />
            </Button>
            <Button
              variant="ghost"
              className="text-purple-500 transition-all duration-200"
              aria-label="Save Test Case"
            >
              <FaSave />
            </Button>
          </div>
        </nav>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input placeholder="Test Name" className="w-full text-white" />
          </div>
          <div>
            <Input placeholder="Description" className="w-full text-white" />
          </div>
          <div>
            <Input placeholder="URL" className="w-full text-white" />
          </div>
          <div>
            <MultiSelect
              options={browserOptions}
              className="w-full"
              placeholder="Select Browser"
            />
          </div>
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-accentDark">+</TableHead>
                <TableHead className="text-accentDark">Action</TableHead>
                <TableHead className="text-accentDark">Element Type</TableHead>
                <TableHead className="text-accentDark">Element Value</TableHead>
                <TableHead className="text-accentDark">-</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.id}>
                  {/* + Add Row Button */}
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
                    {/* Action dropdown */}
                    <Select
                      value={row.action}
                      onValueChange={(value) =>
                        updateRow(index, "action", value)
                      }
                    >
                      <SelectTrigger className="w-full bg-input">
                        <SelectValue placeholder="Actions" />
                      </SelectTrigger>
                      <SelectContent className="bg-input">
                        <SelectItem value="click">Click</SelectItem>
                        <SelectItem value="assertion">Assertion</SelectItem>
                        <SelectItem value="moveToElement">
                          Move to element
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>

                  <TableCell>
                    {/* Selector dropdown */}
                    <Select
                      value={row.elementType}
                      onValueChange={(value) =>
                        updateRow(index, "elementType", value)
                      }
                    >
                      <SelectTrigger className="w-full bg-input">
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
                      className="text-white"
                    />
                  </TableCell>

                  {/* - Delete Row Button */}
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
      </div>
    </>
  );
}
