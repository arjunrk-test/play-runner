import PageHeader from "@/components/PageHeader";
import { FolderOutput } from "lucide-react";

export default function ResultsPage() {
  return (
    <PageHeader>
      <FolderOutput className="h-6 w-6 text-[#EA580C]" />
      <h3 className="text-lg font-semibold">Results</h3>
    </PageHeader>
  );
}
