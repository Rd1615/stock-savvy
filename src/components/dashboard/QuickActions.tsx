import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Receipt,
  ClipboardList,
  Package,
  Users,
  FileText,
} from "lucide-react";

const actions = [
  {
    title: "New Purchase",
    icon: ShoppingCart,
    href: "/purchases/create",
    color: "text-info",
  },
  {
    title: "New Sale",
    icon: Receipt,
    href: "/sales/create",
    color: "text-success",
  },
  {
    title: "Stock Adjustment",
    icon: ClipboardList,
    href: "/stock/adjustment",
    color: "text-warning",
  },
  {
    title: "Add Product",
    icon: Package,
    href: "/products/add",
    color: "text-accent",
  },
  {
    title: "Add Client",
    icon: Users,
    href: "/clients/add",
    color: "text-primary",
  },
  {
    title: "View Reports",
    icon: FileText,
    href: "/reports/stock",
    color: "text-muted-foreground",
  },
];

export function QuickActions() {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {actions.map((action) => (
          <Link key={action.title} to={action.href} className="quick-action-btn">
            <action.icon className={`h-6 w-6 ${action.color}`} />
            <span className="text-sm font-medium text-center">{action.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
