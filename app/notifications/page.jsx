import PageHeader from "@/components/PageHeader";
import { Bell } from "lucide-react";

export default function NotificationsPage() {
  return (
    <PageHeader>
      <Bell className="h-6 w-6 text-[#64748B]" />
      <h3 className="text-lg font-semibold">Notifications</h3>
    </PageHeader>
  );
}
