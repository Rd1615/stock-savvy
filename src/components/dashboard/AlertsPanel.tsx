import { AlertTriangle, Clock, Package, CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const alerts = [
  {
    id: 1,
    type: "low_stock",
    title: "Low Stock Alert",
    description: "5 products are below minimum stock level",
    icon: Package,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    badge: "Critical",
    badgeVariant: "destructive" as const,
  },
  {
    id: 2,
    type: "out_of_stock",
    title: "Out of Stock",
    description: "3 products are completely out of stock",
    icon: AlertTriangle,
    color: "text-warning",
    bgColor: "bg-warning/10",
    badge: "Warning",
    badgeVariant: "secondary" as const,
  },
  {
    id: 3,
    type: "payment_due",
    title: "Payments Due Today",
    description: "₹45,000 pending from 4 invoices",
    icon: CreditCard,
    color: "text-info",
    bgColor: "bg-info/10",
    badge: "4 Invoices",
    badgeVariant: "outline" as const,
  },
  {
    id: 4,
    type: "pending_invoice",
    title: "Pending Invoices",
    description: "2 purchase invoices awaiting approval",
    icon: Clock,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    badge: "Pending",
    badgeVariant: "outline" as const,
  },
];

export function AlertsPanel() {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Alerts & Notifications</h3>
        <Button variant="ghost" size="sm" className="text-accent">
          View All
        </Button>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="alert-item">
            <div className={`p-2 rounded-lg ${alert.bgColor}`}>
              <alert.icon className={`h-5 w-5 ${alert.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium text-sm">{alert.title}</p>
                <Badge variant={alert.badgeVariant} className="text-xs">
                  {alert.badge}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {alert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
