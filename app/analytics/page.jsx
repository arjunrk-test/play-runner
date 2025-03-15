import PageHeader from "@/components/PageHeader";
import { ChartArea } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <PageHeader>
      <ChartArea className="h-6 w-6 text-[#CA8A04]" />
      <h3 className="text-lg font-semibold">Analytics</h3>
    </PageHeader>
  );
}
