
import { 
  BarChart2, 
  Calendar, 
  ClipboardList, 
  FileText, 
  Home, 
  Menu, 
  MessageSquare, 
  Users 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Users, label: "Employees", path: "/employees" },
  { icon: ClipboardList, label: "Time Records", path: "/time-records" },
  { icon: Calendar, label: "Schedules", path: "/schedules" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: MessageSquare, label: "Notifications", path: "/notifications" },
  { icon: BarChart2, label: "Analytics", path: "/analytics" },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={cn(
      "h-screen bg-sidebar sticky top-0 transition-all duration-300 flex flex-col border-r",
      collapsed ? "w-[70px]" : "w-[250px]"
    )}>
      <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
        {!collapsed && (
          <div className="font-bold text-sidebar-foreground text-xl">TimeTrack</div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <Menu size={20} />
        </Button>
      </div>

      <div className="flex-1 py-4 overflow-y-auto">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={cn(
                "flex items-center px-3 py-2 rounded-md transition-colors",
                "text-sidebar-foreground hover:bg-sidebar-accent",
                location.pathname === item.path ? "bg-sidebar-accent font-medium" : "font-normal"
              )}
            >
              <item.icon size={20} className="flex-shrink-0" />
              {!collapsed && <span className="ml-3">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center text-sidebar-foreground font-medium">
            A
          </div>
          {!collapsed && (
            <div className="ml-3 text-sidebar-foreground">
              <div className="font-medium">Admin User</div>
              <div className="text-xs opacity-80">admin@company.com</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
