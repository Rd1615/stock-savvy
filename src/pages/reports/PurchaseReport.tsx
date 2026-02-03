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

const topDealers = [
  { name: "ABC Suppliers", purchases: 1245000, orders: 24 },
  { name: "Global Electronics", purchases: 820000, orders: 18 },
  { name: "Tech Distributors", purchases: 560000, orders: 15 },
  { name: "Prime Wholesale", purchases: 390000, orders: 12 },
];

const PurchaseReport = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Purchase Report</h1>
          <p className="text-muted-foreground">Purchase analysis and dealer performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
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
            <p className="text-sm text-muted-foreground">Total Purchases</p>
            <p className="text-3xl font-bold">₹30.15L</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Total Orders</p>
            <p className="text-3xl font-bold">89</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Pending Payments</p>
            <p className="text-3xl font-bold text-destructive">₹3.05L</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Active Dealers</p>
            <p className="text-3xl font-bold">12</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Dealers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topDealers.map((dealer, i) => (
              <div key={dealer.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-muted-foreground">#{i + 1}</span>
                  <div>
                    <p className="font-medium">{dealer.name}</p>
                    <p className="text-sm text-muted-foreground">{dealer.orders} orders</p>
                  </div>
                </div>
                <p className="font-mono font-semibold">₹{(dealer.purchases / 100000).toFixed(1)}L</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PurchaseReport;
