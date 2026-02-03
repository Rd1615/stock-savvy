import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor?: string;
}

export function KPICard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  iconColor = "bg-accent",
}: KPICardProps) {
  return (
    <div className="kpi-card animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="kpi-label">{title}</p>
          <p className="kpi-value animate-count-up">{value}</p>
          {change && (
            <p
              className={cn(
                "text-sm font-medium flex items-center gap-1",
                changeType === "positive" && "kpi-trend-up",
                changeType === "negative" && "kpi-trend-down",
                changeType === "neutral" && "text-muted-foreground"
              )}
            >
              {changeType === "positive" && "↑"}
              {changeType === "negative" && "↓"}
              {change}
            </p>
          )}
        </div>
        <div className={cn("p-3 rounded-xl", iconColor)}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
}
