
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EmployeeCardProps {
  employee: {
    id: string;
    name: string;
    position: string;
    department: string;
    avatar?: string;
    status: "active" | "inactive" | "on-leave";
  };
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/employees/${employee.id}`);
  };
  
  return (
    <div className="employee-card" onClick={handleClick}>
      <Avatar className="w-10 h-10">
        <AvatarImage src={employee.avatar} />
        <AvatarFallback>
          {employee.name.split(" ").map(n => n[0]).join("")}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <div className="font-medium truncate">{employee.name}</div>
        <div className="text-sm text-muted-foreground truncate">
          {employee.position} • {employee.department}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
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
        <ChevronsRight size={18} className="text-muted-foreground" />
      </div>
    </div>
  );
}
