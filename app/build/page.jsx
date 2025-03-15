"use client";
import PageHeader from "@/components/PageHeader";
import { Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPlay, FaSave } from "react-icons/fa";
import { MultiSelect } from "@/components/MultiSelect";
import { FaSafari, FaChrome, FaEdge } from "react-icons/fa";
import ActionEditorLayout from "@/components/ActionLayout/ActionEditorLayout";

export default function BuildPage() {
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
        <ActionEditorLayout />
        <div className="bg-white h-[0.01vh]" />
      </div>
    </>
  );
}
