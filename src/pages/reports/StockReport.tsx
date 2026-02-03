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
import { Progress } from "@/components/ui/progress";

const stockData = [
  { category: "Mobile Phones", items: 245, value: 1850000, percentage: 41 },
  { category: "Laptops", items: 128, value: 1420000, percentage: 32 },
  { category: "Audio", items: 189, value: 450000, percentage: 10 },
  { category: "Tablets", items: 67, value: 380000, percentage: 8 },
  { category: "Cameras", items: 45, value: 280000, percentage: 6 },
  { category: "Televisions", items: 78, value: 140000, percentage: 3 },
];

const StockReport = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Stock Report</h1>
          <p className="text-muted-foreground">Current inventory valuation and analysis</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="all">All Warehouses</SelectItem>
              <SelectItem value="main">Main Warehouse</SelectItem>
              <SelectItem value="a">Warehouse A</SelectItem>
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
            <p className="text-sm text-muted-foreground">Total Items</p>
            <p className="text-3xl font-bold">1,284</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Total Value</p>
            <p className="text-3xl font-bold">₹45.2L</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Low Stock Items</p>
            <p className="text-3xl font-bold text-warning">15</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Out of Stock</p>
            <p className="text-3xl font-bold text-destructive">3</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Stock by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {stockData.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.category}</p>
                    <p className="text-sm text-muted-foreground">{item.items} items</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-semibold">₹{(item.value / 100000).toFixed(1)}L</p>
                    <p className="text-sm text-muted-foreground">{item.percentage}%</p>
                  </div>
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StockReport;
