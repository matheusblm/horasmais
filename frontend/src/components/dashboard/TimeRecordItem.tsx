
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface TimeRecordItemProps {
  record: {
    id: string;
    employeeId: string;
    employeeName: string;
    employeeAvatar?: string;
    type: "clock-in" | "clock-out";
    timestamp: Date;
    location?: string;
    verified: boolean;
  };
}

export function TimeRecordItem({ record }: TimeRecordItemProps) {
  const isClockIn = record.type === "clock-in";
  
  return (
    <div className="time-record">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={record.employeeAvatar} />
          <AvatarFallback>
            {record.employeeName.split(" ").map(n => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{record.employeeName}</div>
          <div className="text-sm text-muted-foreground">
            <span className={cn(
              isClockIn ? "text-green-600" : "text-blue-600",
              "font-medium"
            )}>
              {isClockIn ? "Clocked in" : "Clocked out"}
            </span>
            {record.location && <span> • {record.location}</span>}
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-medium">{format(record.timestamp, "h:mm a")}</div>
        <div className="text-sm text-muted-foreground">{format(record.timestamp, "MMM d, yyyy")}</div>
      </div>
    </div>
  );
}
