"use client";
import { sidebarOpen } from "@/hooks/atoms";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import ToggleSidebarButton from "./ToggleSidebarButton";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { CiLight, CiDark } from "react-icons/ci";

export default function PageHeader({ children }) {
  const [isOpen] = useAtom(sidebarOpen);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light", savedTheme === "light");
    }
  }, []);
  const handleThemeClick = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return (
    <div
      className={cn(
        "flex items-center h-[60px] pr-6 border-b transition-colors duration-300",
        isDarkMode ? "bg-primary text-white" : "bg-secondary text-black"
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
      <div className="flex justify-between items-center ml-2 mr-2">
          <Button onClick={handleThemeClick} className="bg-none text-navbarText hover:bg-navbarHover hover:text-navbarText" variant="ghost">
            {theme === "light" ? <CiLight /> : <CiDark />}
          </Button>
      </div>
    </div>
  );
}
