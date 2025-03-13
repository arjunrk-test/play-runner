"use client"
import PageHeader from "@/components/PageHeader";
import { Hammer } from "lucide-react";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MultiSelect from "@/components/Multiselect";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function BuildPage() {
  const [rows, setRows] = useState([]);

  const addRow = () => {
    setRows((prev) => [...prev, { id: prev.length + 1, action: '', elementType: '', elementValue: '' }]);
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
        {/* Header */}
        <h1 className="text-2xl font-semibold text-accentDark">Playwright Test Builder</h1>

        {/* Form Section */}
        <div className="space-y-2">
          <Input placeholder="Test Name" className="w-full text-white" />
          <Input placeholder="Description" className="w-full text-white" />
          <Input placeholder="URL" className="w-full text-white" />

          <div className="flex justify-between items-center text-white">
            <MultiSelect
              options={browserOptions}
              className="w-full"
              placeholder="Select Browser" 
            />
          </div>
        </div>

        <div >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-accentDark">Action</TableHead>
                <TableHead className="text-accentDark">Element Type</TableHead>
                <TableHead className="text-accentDark">Element Value</TableHead>
                <TableHead className="text-accentDark">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  
                  {/* Action dropdown */}
                  <Select >
                    <SelectTrigger className="w-full bg-input">
                      <SelectValue placeholder="Actions" />
                    </SelectTrigger>
                    <SelectContent className="bg-input">
                      <SelectItem className="hover:bg-accentDark hover:text-black" value="click">Click</SelectItem>
                      <SelectItem className="hover:bg-accentDark hover:text-black" value="assertion">Assertion</SelectItem>
                      <SelectItem className="hover:bg-accentDark hover:text-black" value="moveToElement">Move to element</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  
                  {/* Selector dropdown */}
                  <Select >
                    <SelectTrigger className="w-full bg-input">
                      <SelectValue placeholder="Selectors" />
                    </SelectTrigger>
                    <SelectContent className="bg-input">
                      <SelectItem className="hover:bg-accentDark hover:text-black" value="css">CSS</SelectItem>
                      <SelectItem className="hover:bg-accentDark hover:text-black" value="xpath">XPath</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Input placeholder="Element Value" className="text-white" />
                </TableCell>
                <TableCell>
                  <Button onClick={addRow} variant="outline" className="text-accentDark bg-primary hover:bg-accentDark border-accentDark hover:transistion-all duration-500">Add Next Action</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Buttons Section */}
        <div className="flex mt-4 space-x-4 pt-4">
          <Button variant="outline" className="text-cyan-500 bg-primary hover:bg-cyan-500 hover:text-black border-cyan-500 hover:transistion-all duration-500">View Code</Button>
          <Button variant="outline" className="text-green-500 bg-primary hover:bg-green-500 hover:text-black border-green-500 hover:transistion-all duration-500">Run</Button>
          <Button variant="outline" className="text-purple-500 bg-primary hover:bg-purple-500 hover:text-black border-purple-500 hover:transistion-all duration-200">Add Testcase</Button>
        </div>
      </div>
    </>

  );
}