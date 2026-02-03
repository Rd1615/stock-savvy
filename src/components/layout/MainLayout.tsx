import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { TopNavbar } from "./TopNavbar";
import { cn } from "@/lib/utils";

export function MainLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
        isMobileOpen={isMobileOpen}
        onMobileClose={() => setIsMobileOpen(false)}
      />
      <TopNavbar
        onMenuClick={() => setIsMobileOpen(true)}
        isCollapsed={isCollapsed}
      />
      <main
        className={cn(
          "min-h-[calc(100vh-64px)] p-4 lg:p-6 transition-all duration-300",
          isCollapsed ? "lg:ml-16" : "lg:ml-64"
        )}
      >
        <Outlet />
      </main>
    </div>
  );
}
