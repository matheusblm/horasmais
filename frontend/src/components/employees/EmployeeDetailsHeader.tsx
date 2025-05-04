
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Edit, MoreVertical, UserCog, UserMinus } from "lucide-react";

interface EmployeeDetailsHeaderProps {
  employee: {
    id: string;
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    status: "active" | "inactive" | "on-leave";
    avatar?: string;
    startDate: string;
  };
}

export function EmployeeDetailsHeader({ employee }: EmployeeDetailsHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 bg-white rounded-lg border shadow-sm">
      <Avatar className="w-20 h-20">
        <AvatarImage src={employee.avatar} />
        <AvatarFallback className="text-lg">
          {employee.name.split(" ").map(n => n[0]).join("")}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">{employee.name}</h1>
          <Badge
            variant="outline"
            className={
              employee.status === "active" 
                ? "border-green-500 text-green-700 bg-green-50"
                : employee.status === "on-leave"
                  ? "border-yellow-500 text-yellow-700 bg-yellow-50"
                  : "border-gray-500 text-gray-700 bg-gray-50"
            }
          >
            {employee.status === "active" ? "Active" : 
             employee.status === "on-leave" ? "On Leave" : "Inactive"}
          </Badge>
        </div>
        
        <div className="text-muted-foreground mt-1">
          {employee.position} • {employee.department}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 mt-3">
          <div className="text-sm">
            <span className="text-muted-foreground">Email: </span>
            <span>{employee.email}</span>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Phone: </span>
            <span>{employee.phone}</span>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Start Date: </span>
            <span>{employee.startDate}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 self-end md:self-start">
        <Button variant="outline" size="sm">
          <Edit size={16} className="mr-2" />
          Edit
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical size={18} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <UserCog size={16} className="mr-2" />
              Manage permissions
            </DropdownMenuItem>
            <DropdownMenuItem>View documents</DropdownMenuItem>
            <DropdownMenuItem>View schedules</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <UserMinus size={16} className="mr-2" />
              Deactivate employee
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
