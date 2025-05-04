
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Edit, MoreHorizontal, Check, X, MapPin } from "lucide-react";

export interface TimeRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  employeeAvatar?: string;
  type: "clock-in" | "clock-out";
  timestamp: Date;
  location?: string;
  verified: boolean;
  method: "app" | "web" | "whatsapp" | "manual";
  notes?: string;
}

interface TimeRecordsListProps {
  records: TimeRecord[];
}

export function TimeRecordsList({ records }: TimeRecordsListProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Employee</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={record.employeeAvatar} />
                    <AvatarFallback>
                      {record.employeeName.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span>{record.employeeName}</span>
                </div>
              </TableCell>
              <TableCell>
                <span className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium",
                  record.type === "clock-in" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-blue-100 text-blue-800"
                )}>
                  {record.type === "clock-in" ? "Clock In" : "Clock Out"}
                </span>
              </TableCell>
              <TableCell>{format(record.timestamp, "h:mm a")}</TableCell>
              <TableCell>{format(record.timestamp, "MMM d, yyyy")}</TableCell>
              <TableCell>
                <span className="capitalize">{record.method}</span>
                {record.method === "manual" && 
                  <span className="text-xs text-muted-foreground ml-1">(by admin)</span>
                }
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  {record.verified ? (
                    <div className="flex items-center text-green-600">
                      <Check size={16} className="mr-1" />
                      <span>Verified</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-amber-600">
                      <X size={16} className="mr-1" />
                      <span>Unverified</span>
                    </div>
                  )}
                  {record.location && (
                    <Button variant="ghost" size="icon" className="ml-2" title={record.location}>
                      <MapPin size={16} className="text-muted-foreground" />
                    </Button>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit record
                    </DropdownMenuItem>
                    {!record.verified && (
                      <DropdownMenuItem>
                        <Check className="mr-2 h-4 w-4" />
                        Verify record
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem>View details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
