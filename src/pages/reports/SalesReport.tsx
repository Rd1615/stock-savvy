import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { date: "Jan 01", sales: 45000 },
  { date: "Jan 05", sales: 62000 },
  { date: "Jan 10", sales: 78000 },
  { date: "Jan 15", sales: 124500 },
  { date: "Jan 20", sales: 95000 },
  { date: "Jan 25", sales: 112000 },
  { date: "Jan 30", sales: 148000 },
];

const topClients = [
  { name: "Tech Solutions Pvt Ltd", sales: 520000, invoices: 12 },
  { name: "Rahul Enterprises", sales: 245000, invoices: 8 },
  { name: "Digital World", sales: 198000, invoices: 6 },
  { name: "Sharma & Co.", sales: 180000, invoices: 5 },
  { name: "Gadget Hub", sales: 125000, invoices: 4 },
];

const SalesReport = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Sales Report</h1>
          <p className="text-muted-foreground">Sales analysis and trends</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Total Sales</p>
            <p className="text-3xl font-bold">₹7.17L</p>
            <p className="text-xs text-success mt-1">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Total Invoices</p>
            <p className="text-3xl font-bold">158</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Avg. Invoice Value</p>
            <p className="text-3xl font-bold">₹45,380</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Collection Rate</p>
            <p className="text-3xl font-bold text-success">84.1%</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sales Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
                <XAxis dataKey="date" tick={{ fill: "hsl(215, 16%, 47%)", fontSize: 12 }} />
                <YAxis tickFormatter={(v) => `₹${v / 1000}k`} tick={{ fill: "hsl(215, 16%, 47%)", fontSize: 12 }} />
                <Tooltip formatter={(v: number) => [`₹${v.toLocaleString()}`, "Sales"]} />
                <Area type="monotone" dataKey="sales" stroke="hsl(142, 71%, 45%)" fill="url(#salesGradient)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topClients.map((client, i) => (
              <div key={client.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-muted-foreground">#{i + 1}</span>
                  <div>
                    <p className="font-medium">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.invoices} invoices</p>
                  </div>
                </div>
                <p className="font-mono font-semibold">₹{(client.sales / 1000).toFixed(0)}K</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesReport;
