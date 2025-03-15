import PageHeader from "@/components/PageHeader";
import { ListCheck } from "lucide-react";
import TableView from "@/app/tests/TableView"

export default function TestsPage() {
  return (
    <>
      <PageHeader>
        <ListCheck className="h-6 w-6 text-[#7C3AED]" />
        <h3 className="text-lg font-semibold">Tests</h3>
      </PageHeader>
      <TableView />
    </>
    
  );
}
