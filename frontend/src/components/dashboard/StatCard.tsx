
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  className,
}: StatCardProps) {
  return (
    <div className={cn("stat-card", className)}>
      <div className="flex justify-between items-start">
        <p className="stat-label">{title}</p>
        <Icon size={18} className="text-muted-foreground" />
      </div>
      <p className="stat-value">{value}</p>
      {trend && (
        <div className="flex items-center mt-2 text-xs">
          <span
            className={cn(
              "flex items-center",
              trend.isPositive ? "text-green-600" : "text-red-600"
            )}
          >
            {trend.isPositive ? "+" : "-"}{trend.value}%
          </span>
          <span className="ml-2 text-muted-foreground">vs last week</span>
        </div>
      )}
      {description && (
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
