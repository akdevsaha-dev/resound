"use client";

import { useSession } from "@/app/lib/auth-client";
import Image from "next/image";
import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
} from "@/app/components/ui/sidebar";
import {
  Archive,
  Download,
  Inbox,
  Library,
  MessageSquareText,
  ReceiptText,
  Settings,
  Star,
  Trash2,
} from "lucide-react";
import { useSideBarStore } from "../store/sidebarStore";

export function AppSidebar() {
  const { data: session, isPending } = useSession();
  const setActiveItem = useSideBarStore(
    (state) => state.setActiveItem,
  );
  if (isPending) return null;

  const name = session?.user?.name ?? "";
  const image = session?.user?.image;
  const initial = name.charAt(0).toUpperCase();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuButton className="hover:bg-transparent  focus:bg-transparent active:bg-transparent data-[active=true]:bg-transparent w-full h-auto group-data-[collapsible=icon]:h-auto! px-4 py-3 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:py-3">
            {image ? (
              <div className="relative h-6 w-6 shrink-0 group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:mt-">
                <Image
                  src={image}
                  alt="Profile picture"
                  fill
                  sizes="28px"
                  className="rounded-md object-cover"
                />
              </div>
            ) : (
              <div className="h-8 w-8 flex items-center justify-center rounded-md bg-neutral-600 text-white text-sm font-semibold">
                {initial || "U"}
              </div>
            )}
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-3 group-data-[collapsible=icon]:px-0">
        <div className="flex flex-col items-start text-left group-data-[collapsible=icon]:hidden w-full pl-3">
          <span className="text-sm font-medium">{session?.user?.name}</span>
          <span className="text-xs text-white/50 mt-1">
            {session?.user?.email}
          </span>
        </div>
        <div className="mt-10 group-data-[collapsible=icon]:mt-3 pl-2 text-sm text-neutral-400 group-data-[collapsible=icon]:opacity-0">
          Core
        </div>
        <div className="border-t border-t-neutral-800 group-data-[collapsible=icon]:block hidden mx-4"></div>
        <SidebarMenu>
          <SidebarMenuItem className="flex  justify-center">
            <SidebarMenuButton
              onClick={() => setActiveItem("newsletter")}
              tooltip={"Newsletter"}
              className=" "
            >
              <Inbox className="opacity-70" />
              Newsletters
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem className="flex  justify-center">
            <SidebarMenuButton onClick={() => setActiveItem("library")} tooltip={"Library"} className="">
              <Library className="opacity-70" />
              Library
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem className="flex  justify-center">
            <SidebarMenuButton onClick={() => setActiveItem("starred")} tooltip={"Starred"} className="">
              <Star className="opacity-70" />
              Starred
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem className="flex  justify-center">
            <SidebarMenuButton onClick={() => setActiveItem("downloads")} tooltip={"Downloads"} className="">
              <Download className="opacity-70" />
              Downloads
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="mt-10 group-data-[collapsible=icon]:mt-0 pl-2 text-sm text-neutral-400 group-data-[collapsible=icon]:opacity-0">
          Management
        </div>
        <div className="border-t border-t-neutral-800 group-data-[collapsible=icon]:block hidden mx-4"></div>
        <SidebarMenu className="mt-2">
          <SidebarMenuItem className="flex  justify-center">
            <SidebarMenuButton onClick={() => setActiveItem("billings")} tooltip={"Billings"} className="">
              <ReceiptText className="opacity-70" />
              Billings
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem className="flex  justify-center">
            <SidebarMenuButton onClick={() => setActiveItem("archive")} tooltip={"Archive"} className="">
              <Archive className="opacity-70" />
              Archive
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem className="flex  justify-center">
            <SidebarMenuButton onClick={() => setActiveItem("bin")} tooltip={"Bin"} className="">
              <Trash2 className="opacity-70" />
              Bin
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="flex justify-center">
            <SidebarMenuButton tooltip={"settings"} className="">
              <MessageSquareText className="opacity-70" />
              Feedback
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="border-t border-t-neutral-800 group-data-[collapsible=icon]:block hidden mx-2 mt-2"></div>
        <SidebarMenu>
          <SidebarMenuItem className="flex justify-center">
            <SidebarMenuButton tooltip={"settings"} className="">
              <Settings className="opacity-70" />
              Settings
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
