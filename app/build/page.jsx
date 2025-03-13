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

      <div className="p-6 space-y-4 bg-secondary">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-[#1e3a8a]">Playwright Test Builder</h1>

        {/* Form Section */}
        <div className="space-y-2">
          <Input placeholder="Test Name" className="w-full text-black" />
          <Input placeholder="Description" className="w-full text-black" />
          <Input placeholder="URL" className="w-full text-black" />

          <div className="flex justify-between items-center text-black">
            <MultiSelect
              options={browserOptions}
              className="w-full"
              placeholder="Select Browser" 
            />
          </div>
        </div>

        <div className="text-black">
          <label className="block text-sm font-medium text-black">Actions</label>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>Element Type</TableHead>
                <TableHead>Element Value</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  
                  {/* Action dropdown */}
                  <Select >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Actions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="click">Click</SelectItem>
                      <SelectItem value="assertion">Assertion</SelectItem>
                      <SelectItem value="moveToElement">Move to element</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  
                  {/* Selector dropdown */}
                  <Select >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selectors" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="css">CSS</SelectItem>
                      <SelectItem value="xpath">XPath</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Input placeholder="Element Value" />
                </TableCell>
                <TableCell>
                  <Button onClick={addRow} variant="outline" className="text-white">Add Next Action</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Buttons Section */}
        <div className="flex mt-4 space-x-4 pt-4">
          <Button variant="secondary">View Code</Button>
          <Button variant="destructive">Run</Button>
          <Button variant="secondary">Add Testcase</Button>
        </div>

        {/* Console Window */}
        <div className="mt-4 p-4 bg-gray-500 rounded-md">
          <h2 className="text-lg font-semibold">Console</h2>
          <div className="text-sm text-gray-700">Test output will be displayed here...</div>
        </div>
      </div>
    </>

  );
}