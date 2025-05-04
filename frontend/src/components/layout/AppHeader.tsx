
import { Bell, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export function AppHeader() {
  return (
    <header className="h-16 border-b flex items-center justify-between px-6 bg-background">
      <div className="flex items-center gap-4 w-full max-w-md">
        <Search size={20} className="text-muted-foreground" />
        <Input 
          placeholder="Search employees, records..." 
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-y-auto">
              <DropdownMenuItem className="cursor-pointer p-3">
                <div>
                  <div className="font-medium">New time record</div>
                  <div className="text-sm text-muted-foreground">Sarah Johnson clocked in at 9:05 AM</div>
                  <div className="text-xs text-muted-foreground mt-1">10 minutes ago</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-3">
                <div>
                  <div className="font-medium">Late arrival</div>
                  <div className="text-sm text-muted-foreground">Mike Peterson is 15 minutes late</div>
                  <div className="text-xs text-muted-foreground mt-1">30 minutes ago</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer p-3">
                <div>
                  <div className="font-medium">Overtime request</div>
                  <div className="text-sm text-muted-foreground">Alex Morgan requested overtime approval</div>
                  <div className="text-xs text-muted-foreground mt-1">2 hours ago</div>
                </div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-center text-primary">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Account settings</DropdownMenuItem>
            <DropdownMenuItem>Company settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
