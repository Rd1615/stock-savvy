import { Package, Receipt, Users, CreditCard, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "sale",
    title: "New Sale Invoice",
    description: "INV-2024-0158 created for Rahul Enterprises",
    amount: "₹24,500",
    time: "2 min ago",
    icon: Receipt,
    color: "bg-success",
  },
  {
    id: 2,
    type: "purchase",
    title: "Purchase Received",
    description: "PO-2024-0089 from ABC Suppliers",
    amount: "₹1,25,000",
    time: "15 min ago",
    icon: Package,
    color: "bg-info",
  },
  {
    id: 3,
    type: "payment",
    title: "Payment Received",
    description: "From Sharma & Co.",
    amount: "₹50,000",
    time: "1 hour ago",
    icon: CreditCard,
    color: "bg-accent",
  },
  {
    id: 4,
    type: "client",
    title: "New Client Added",
    description: "Tech Solutions Pvt Ltd",
    time: "2 hours ago",
    icon: Users,
    color: "bg-primary",
  },
  {
    id: 5,
    type: "stock",
    title: "Stock Adjustment",
    description: "15 items adjusted in Warehouse A",
    time: "3 hours ago",
    icon: Package,
    color: "bg-warning",
  },
];

export function RecentActivities() {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Recent Activities</h3>
        <span className="text-sm text-muted-foreground">Today</span>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={cn("p-2 rounded-lg", activity.color)}>
              <activity.icon className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-medium text-sm">{activity.title}</p>
                {activity.amount && (
                  <span className="text-sm font-semibold">{activity.amount}</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {activity.description}
              </p>
              <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
