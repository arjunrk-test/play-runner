import PageHeader from "@/components/PageHeader";
import { LayoutGrid } from "lucide-react";

export default function Home() {
  return (
    <>
      <PageHeader>
        <LayoutGrid className="h-6 w-6 text-[#1E40AF]" />
        <h3 className="text-lg font-semibold">Dashboard</h3>
      </PageHeader>
    </>
  );
}
