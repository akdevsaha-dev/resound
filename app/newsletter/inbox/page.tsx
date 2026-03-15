"use client";
import { SidebarTrigger } from "@/app/components/ui/sidebar";
import { useSideBarStore } from "@/app/store/sidebarStore";

export default function Page() {
  const isNewsletterSelected = useSideBarStore(
    (state) => state.activeItem === "newsletter",
  );
  return (
    <div className=" h-full flex gap-3 w-full">
      <div className="flex-1 px-2">
        <SidebarTrigger />
        {isNewsletterSelected ? <div>News letter is selected</div> : <div>hahahha </div>}
      </div>
      <div className="flex-1 bg-red-500"></div>
    </div>
  );
}
