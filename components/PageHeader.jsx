"use client";
import { sidebarOpen } from "@/hooks/atoms";
import { useAtom } from "jotai";
import ToggleSidebarButton from "./ToggleSidebarButton";
import { cn } from "@/lib/utils";

export default function PageHeader({ children }) {
  const [isOpen] = useAtom(sidebarOpen);

  return (
    <div
      className={cn(
        "flex items-center h-[60px] pr-6 border-b transition-colors duration-300 text-white bg-primary"
      )}
    >
      <ToggleSidebarButton />
      <div
        className={cn(
          "flex gap-x-2 items-center transition-[padding-left] flex-1",
          isOpen ? "pl-5" : "pl-[60px]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
