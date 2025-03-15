"use client";
import PageHeader from "@/components/PageHeader";
import { Hammer } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { FaCode, FaPlay, FaSave } from "react-icons/fa";
import Split from "react-split";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { MultiSelect } from "@/components/MultiSelect";
import { FaSafari, FaChrome, FaEdge } from "react-icons/fa";


export default function BuildPage() {
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

  const browserIcons = {
    chromeIcon: FaChrome,
    edgeIcon: FaEdge,
    safariIcon: FaSafari,
  }

  const browserOptions = [
    { value: "chrome", label: "Chrome", icon: browserIcons.chromeIcon },
    { value: "edge", label: "Edge", icon: browserIcons.edgeIcon },
    { value: "safari", label: "Safari", icon: browserIcons.safariIcon },
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
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-2">
            <Input placeholder="Test Name" className="w-full h-5 text- border-red-700" />
            <Input placeholder="Description" className="w-full h-5 text-white border-green-700" />
            <Input placeholder="URL" className="w-full h-5 text-white border-blue-700" />
            <MultiSelect 
              options={browserOptions} 
              placeholder="Select browser"
              className="w-full h-5 bg-input text-white/70 hover:bg-input border-accentDark"
              variant="inverted"
            />
          </div>
        </div>
        <div className="bg-white h-[0.1vh]" />

        {/* Split Pane for Table and Code Editor */}
        <Split
          className="flex h-[65vh] mt-4"
          sizes={[60, 40]}
          minSize={200}
          gutterSize={8}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
        >
          {/* Left Pane (Table) */}
          <div className="overflow-auto bg-muted p-2 ">
            <Table>
              <TableHeader >
                <TableRow >
                  <TableHead className="text-black bg-accentDark sticky top-0 ">
                    Add Row
                  </TableHead>
                  <TableHead className="text-black sticky top-0 bg-accentDark ">
                    Action
                  </TableHead>
                  <TableHead className="text-black sticky top-0 bg-accentDark ">
                    Element Type
                  </TableHead>
                  <TableHead className="text-black sticky top-0 bg-accentDark ">
                    Element Value
                  </TableHead>
                  <TableHead className="text-black sticky top-0 bg-accentDark">
                    Delete Row
                  </TableHead>
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
                          <SelectItem value="moveToElement">
                            Move to element
                          </SelectItem>
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

          {/* Right Pane (Placeholder for Code Editor) */}
          <div className="bg-muted p-2 rounded">
            <p className="text-white">Code editor will be here...</p>
          </div>
        </Split>
        <div className="bg-white h-[0.01vh]" />
      </div>
    </>
  );
}
