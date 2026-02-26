import { SidebarTrigger } from "@/app/components/ui/sidebar";

export default function Page() {
  return <div className=" h-full flex gap-3 w-full">
    <div className="flex-1 px-2">
        <SidebarTrigger />
    </div>
    <div className="flex-1 bg-red-500"></div>
  </div>;
}
