import {
  Package,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Users,
  AlertTriangle,
  CreditCard,
  Wallet,
} from "lucide-react";
import { KPICard } from "@/components/dashboard/KPICard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { AlertsPanel } from "@/components/dashboard/AlertsPanel";
import { RecentActivities } from "@/components/dashboard/RecentActivities";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { TopProducts } from "@/components/dashboard/TopProducts";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your business overview.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Products"
          value="1,284"
          change="+12 this month"
          changeType="positive"
          icon={Package}
          iconColor="bg-accent"
        />
        <KPICard
          title="Stock Value"
          value="₹45.2L"
          change="+8.5% from last month"
          changeType="positive"
          icon={DollarSign}
          iconColor="bg-success"
        />
        <KPICard
          title="Today's Sales"
          value="₹1,24,500"
          change="23 invoices"
          changeType="neutral"
          icon={TrendingUp}
          iconColor="bg-info"
        />
        <KPICard
          title="Today's Purchase"
          value="₹85,000"
          change="8 orders"
          changeType="neutral"
          icon={ShoppingCart}
          iconColor="bg-warning"
        />
      </div>

      {/* Second Row KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Clients"
          value="342"
          change="+5 this week"
          changeType="positive"
          icon={Users}
          iconColor="bg-primary"
        />
        <KPICard
          title="Low Stock Items"
          value="15"
          change="Needs attention"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="bg-destructive"
        />
        <KPICard
          title="Pending (Clients)"
          value="₹3.2L"
          change="45 invoices"
          changeType="neutral"
          icon={CreditCard}
          iconColor="bg-info"
        />
        <KPICard
          title="Pending (Dealers)"
          value="₹1.8L"
          change="12 invoices"
          changeType="neutral"
          icon={Wallet}
          iconColor="bg-warning"
        />
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Charts and Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <AlertsPanel />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopProducts />
        <RecentActivities />
      </div>
    </div>
  );
};

export default Dashboard;
