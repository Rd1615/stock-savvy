import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  Building2,
  Warehouse,
  ShoppingCart,
  Receipt,
  CreditCard,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronRight,
  Box,
  Tags,
  Award,
  Ruler,
  MapPin,
  Percent,
  Shield,
  PackagePlus,
  PackageMinus,
  ArrowLeftRight,
  ClipboardList,
  Trash2,
  FileText,
  ReceiptText,
  CornerDownLeft,
  Wallet,
  HandCoins,
  BadgeDollarSign,
  PieChart,
  TrendingUp,
  FileSpreadsheet,
  Building,
  Stamp,
  UserCog,
  Database,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavItem {
  title: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Masters",
    icon: Box,
    children: [
      { title: "Categories", href: "/masters/categories", icon: Tags },
      { title: "Brands", href: "/masters/brands", icon: Award },
      { title: "Units", href: "/masters/units", icon: Ruler },
      { title: "Warehouses", href: "/masters/warehouses", icon: MapPin },
      { title: "Products", href: "/products", icon: Package },
      { title: "Taxes (GST)", href: "/masters/taxes", icon: Percent },
      { title: "Staff & Roles", href: "/masters/staff", icon: Shield },
    ],
  },
  {
    title: "Dealers",
    icon: Building2,
    children: [
      { title: "Dealer List", href: "/dealers", icon: Building2 },
      { title: "Add Dealer", href: "/dealers/add", icon: Building2 },
      { title: "Dealer Ledger", href: "/dealers/ledger", icon: FileText },
    ],
  },
  {
    title: "Clients",
    icon: Users,
    children: [
      { title: "Client List", href: "/clients", icon: Users },
      { title: "Add Client", href: "/clients/add", icon: Users },
      { title: "Client Ledger", href: "/clients/ledger", icon: FileText },
    ],
  },
  {
    title: "Stock",
    icon: Warehouse,
    children: [
      { title: "Stock Overview", href: "/stock", icon: ClipboardList },
      { title: "Stock IN", href: "/stock/in", icon: PackagePlus },
      { title: "Stock OUT", href: "/stock/out", icon: PackageMinus },
      { title: "Stock Transfer", href: "/stock/transfer", icon: ArrowLeftRight },
      { title: "Stock Adjustment", href: "/stock/adjustment", icon: ClipboardList },
      { title: "Damage/Expired", href: "/stock/damage", icon: Trash2 },
    ],
  },
  {
    title: "Purchases",
    icon: ShoppingCart,
    children: [
      { title: "Purchase List", href: "/purchases", icon: Receipt },
      { title: "Create Purchase", href: "/purchases/create", icon: ReceiptText },
      { title: "Purchase Return", href: "/purchases/return", icon: CornerDownLeft },
    ],
  },
  {
    title: "Sales",
    icon: Receipt,
    children: [
      { title: "Sales List", href: "/sales", icon: Receipt },
      { title: "Create Sale", href: "/sales/create", icon: ReceiptText },
      { title: "Sales Return", href: "/sales/return", icon: CornerDownLeft },
    ],
  },
  {
    title: "Payments",
    icon: CreditCard,
    children: [
      { title: "Receive Payment", href: "/payments/receive", icon: Wallet },
      { title: "Pay Payment", href: "/payments/pay", icon: HandCoins },
      { title: "Expenses", href: "/payments/expenses", icon: BadgeDollarSign },
    ],
  },
  {
    title: "Reports",
    icon: BarChart3,
    children: [
      { title: "Stock Report", href: "/reports/stock", icon: ClipboardList },
      { title: "Sales Report", href: "/reports/sales", icon: TrendingUp },
      { title: "Purchase Report", href: "/reports/purchase", icon: PieChart },
      { title: "Profit/Loss", href: "/reports/profit", icon: BarChart3 },
      { title: "GST Report", href: "/reports/gst", icon: FileSpreadsheet },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    children: [
      { title: "Company Profile", href: "/settings/company", icon: Building },
      { title: "Invoice Format", href: "/settings/invoice", icon: Stamp },
      { title: "Roles & Permissions", href: "/settings/roles", icon: UserCog },
      { title: "Backup", href: "/settings/backup", icon: Database },
    ],
  },
];

interface SidebarGroupProps {
  item: NavItem;
  isCollapsed: boolean;
}

function SidebarGroup({ item, isCollapsed }: SidebarGroupProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(() => {
    if (item.children) {
      return item.children.some((child) => child.href === location.pathname);
    }
    return false;
  });

  const Icon = item.icon;

  if (!item.children) {
    return (
      <NavLink
        to={item.href || "/"}
        className={({ isActive }) =>
          cn(
            "sidebar-item",
            isActive && "active",
            isCollapsed && "justify-center px-2"
          )
        }
      >
        <Icon className="h-5 w-5 shrink-0" />
        {!isCollapsed && <span>{item.title}</span>}
      </NavLink>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "sidebar-item w-full",
          isCollapsed && "justify-center px-2"
        )}
      >
        <Icon className="h-5 w-5 shrink-0" />
        {!isCollapsed && (
          <>
            <span className="flex-1 text-left">{item.title}</span>
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </>
        )}
      </button>
      {isOpen && !isCollapsed && (
        <div className="ml-4 mt-1 space-y-1 border-l border-sidebar-border pl-3">
          {item.children.map((child) => (
            <NavLink
              key={child.href}
              to={child.href || "/"}
              className={({ isActive }) =>
                cn(
                  "sidebar-item text-sm py-2",
                  isActive && "active"
                )
              }
            >
              <child.icon className="h-4 w-4 shrink-0" />
              <span>{child.title}</span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

interface AppSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export function AppSidebar({
  isCollapsed,
  onToggle,
  isMobileOpen,
  onMobileClose,
}: AppSidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen bg-sidebar flex flex-col transition-all duration-300",
          isCollapsed ? "w-16" : "w-64",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
                <Package className="h-5 w-5 text-sidebar-primary-foreground" />
              </div>
              <span className="font-semibold text-sidebar-foreground">StockPro</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="hidden lg:flex text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onMobileClose}
            className="lg:hidden text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-1">
            {navigation.map((item) => (
              <SidebarGroup
                key={item.title}
                item={item}
                isCollapsed={isCollapsed}
              />
            ))}
          </nav>
        </ScrollArea>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-4">
          {!isCollapsed && (
            <div className="text-xs text-sidebar-muted">
              © 2024 StockPro ERP
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
