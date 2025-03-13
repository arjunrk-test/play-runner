"use client";
import { ArrowLeft, Bell, Hammer, ListCheck, Package2, Settings, ChartArea, FolderOutput, LayoutDashboard } from "lucide-react";
import { useAtom } from "jotai";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sidebarOpen } from "@/hooks/atoms";
import { cn } from "@/lib/utils";
import { NavbarLink } from "./NavbarLink";
import UserMenu from "./UserMenu";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setOpen] = useAtom(sidebarOpen);
  const path = usePathname();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 border-r z-20 transition-[width] ease-in-out overflow-hidden",
        "flex flex-col max-h-screen h-full",
        isOpen ? "w-[18rem]" : "w-[3.5rem]",
      )}
    >
      {/* Sidebar header */}
      <div
        className={cn(
          "flex items-center h-[60px] border-b bg-primary text-white",
          isOpen ? "px-6" : "justify-center"
        )}
      >
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package2
            className={cn(
              "h-6 w-6 text-[#34D399] transition-all",
              !isOpen && "mx-auto"
            )}
          />
          <span className={cn(!isOpen && "sr-only")}>Play Runner</span>
        </Link>
        {isOpen ? (
          <Button
            variant="secondary"
            size="icon"
            className="ml-auto h-6 w-6"
            onClick={() => setOpen((prev) => !prev)}
          >
            <ArrowLeft className="h-4 w-4 text-red-500" />
            <span className="sr-only">Toggle Navbar</span>
          </Button>
        ) : null}
      </div>

      <nav className="flex flex-col flex-1 text-sm font-medium bg-primary text-white">
        {/* Main menu links */}
        <div
          className={cn(
            "flex flex-col",
            isOpen ? "p-4" : "items-center gap-y-4 py-4 animate-sidebar-closed"
          )}
        >
          <NavbarLink
            href="/"
            isSidebarOpen={isOpen}
            icon={<LayoutDashboard className="h-4 w-4 shrink-0 text-[#1E40AF]" />}
            label="Dashboard"
            isSelected={path === "/"}
          />
          <NavbarLink
            href="/build"
            isSidebarOpen={isOpen}
            icon={<Hammer className="h-4 w-4 shrink-0 text-[#0D9488]" />}
            label="Build"
            isSelected={path === "/build"}
          />
          <NavbarLink
            href="/tests"
            isSelected={path === "/tests"}
            isSidebarOpen={isOpen}
            icon={<ListCheck className="h-4 w-4 shrink-0 text-[#7C3AED]" />}
            label="Tests"
          />
          <NavbarLink
            href="/results"
            isSelected={path === "/results"}
            isSidebarOpen={isOpen}
            icon={<FolderOutput className="h-4 w-4 shrink-0 text-[#EA580C]" />}
            label="Results"
          />
          <NavbarLink
            href="/analytics"
            isSelected={path === "/analytics"}
            isSidebarOpen={isOpen}
            icon={<ChartArea className="h-4 w-4 shrink-0 text-[#CA8A04]" />}
            label="Analytics"
          />
        </div>
        {/* Bottom section of the sidebar */}
        <div
          className={cn(
            "mt-auto flex flex-col border-b border-t bg-primary",
            isOpen ? "p-4" : "items-center gap-y-4 py-4 animate-sidebar-closed"
          )}
        >
          <NavbarLink
            href="/settings"
            isSelected={path === "/settings"}
            isSidebarOpen={isOpen}
            icon={<Settings className="h-4 w-4 shrink-0 text-[#F87171]" />}
            label="Settings"
          />
          <NavbarLink
            isSelected={path === "/notifications"}
            href="/notifications"
            isSidebarOpen={isOpen}
            icon={<Bell className="h-4 w-4 shrink-0 text-[#64748B]" />}
            label="Notifications"
          />
        </div>
        {/* User menu */}
        <UserMenu isSidebarOpen={isOpen} />
      </nav>
    </aside>
  );
}

