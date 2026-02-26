import { AppSidebar } from "@/app/components/app-sidebar";
import { SidebarProvider } from "@/app/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen">
        <AppSidebar />

        <main className="flex-1 h-full">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
