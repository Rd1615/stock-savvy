import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Download,
  ArrowUpDown,
  PackagePlus,
  PackageMinus,
  ArrowLeftRight,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const stockItems = [
  {
    id: 1,
    product: "Samsung Galaxy S24 Ultra",
    sku: "SAM-S24U-256",
    warehouse: "Main Warehouse",
    opening: 50,
    stockIn: 20,
    stockOut: 25,
    adjustment: 0,
    closing: 45,
    minStock: 20,
    value: 4275000,
  },
  {
    id: 2,
    product: "Apple MacBook Pro 14\"",
    sku: "APL-MBP14-512",
    warehouse: "Main Warehouse",
    opening: 30,
    stockIn: 10,
    stockOut: 17,
    adjustment: 0,
    closing: 23,
    minStock: 15,
    value: 3335000,
  },
  {
    id: 3,
    product: "Sony WH-1000XM5",
    sku: "SNY-WH5-BLK",
    warehouse: "Warehouse A",
    opening: 100,
    stockIn: 30,
    stockOut: 52,
    adjustment: 0,
    closing: 78,
    minStock: 30,
    value: 1716000,
  },
  {
    id: 4,
    product: "Dell XPS 15",
    sku: "DEL-XPS15-1TB",
    warehouse: "Main Warehouse",
    opening: 15,
    stockIn: 5,
    stockOut: 15,
    adjustment: 0,
    closing: 5,
    minStock: 10,
    value: 490000,
  },
  {
    id: 5,
    product: "iPad Pro 12.9\"",
    sku: "APL-IPAD-256",
    warehouse: "Warehouse B",
    opening: 25,
    stockIn: 0,
    stockOut: 25,
    adjustment: 0,
    closing: 0,
    minStock: 15,
    value: 0,
  },
  {
    id: 6,
    product: "Bose QuietComfort 45",
    sku: "BSE-QC45-BLK",
    warehouse: "Main Warehouse",
    opening: 40,
    stockIn: 10,
    stockOut: 16,
    adjustment: 0,
    closing: 34,
    minStock: 20,
    value: 850000,
  },
];

const getStockStatus = (closing: number, minStock: number) => {
  if (closing === 0) {
    return (
      <Badge className="status-badge status-unpaid gap-1">
        <AlertTriangle className="h-3 w-3" />
        Out of Stock
      </Badge>
    );
  }
  if (closing <= minStock) {
    return (
      <Badge className="status-badge status-pending gap-1">
        <AlertTriangle className="h-3 w-3" />
        Low Stock
      </Badge>
    );
  }
  return <Badge className="status-badge status-paid">In Stock</Badge>;
};

const Stock = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Stock Overview</h1>
          <p className="text-muted-foreground">
            Track and manage your inventory
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Link to="/stock/in">
          <div className="bg-card rounded-xl border border-border p-4 hover:border-success hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/10 group-hover:bg-success/20 transition-colors">
                <PackagePlus className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="font-semibold">Stock IN</p>
                <p className="text-xs text-muted-foreground">Add inventory</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/stock/out">
          <div className="bg-card rounded-xl border border-border p-4 hover:border-destructive hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                <PackageMinus className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="font-semibold">Stock OUT</p>
                <p className="text-xs text-muted-foreground">Remove inventory</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/stock/transfer">
          <div className="bg-card rounded-xl border border-border p-4 hover:border-info hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-info/10 group-hover:bg-info/20 transition-colors">
                <ArrowLeftRight className="h-5 w-5 text-info" />
              </div>
              <div>
                <p className="font-semibold">Transfer</p>
                <p className="text-xs text-muted-foreground">Move stock</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/stock/adjustment">
          <div className="bg-card rounded-xl border border-border p-4 hover:border-warning hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-warning/10 group-hover:bg-warning/20 transition-colors">
                <ArrowUpDown className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="font-semibold">Adjustment</p>
                <p className="text-xs text-muted-foreground">Fix mismatch</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Total Products</p>
          <p className="text-2xl font-bold">1,284</p>
          <p className="text-xs text-muted-foreground mt-1">Active items</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Total Stock Value</p>
          <p className="text-2xl font-bold">₹45.2L</p>
          <p className="text-xs text-success mt-1">+8.5% from last month</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Low Stock Items</p>
          <p className="text-2xl font-bold text-warning">15</p>
          <p className="text-xs text-muted-foreground mt-1">Need reorder</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Out of Stock</p>
          <p className="text-2xl font-bold text-destructive">3</p>
          <p className="text-xs text-muted-foreground mt-1">Urgent attention</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by product name or SKU..."
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Warehouse" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="all">All Warehouses</SelectItem>
                <SelectItem value="main">Main Warehouse</SelectItem>
                <SelectItem value="a">Warehouse A</SelectItem>
                <SelectItem value="b">Warehouse B</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="phones">Mobile Phones</SelectItem>
                <SelectItem value="laptops">Laptops</SelectItem>
                <SelectItem value="audio">Audio</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="instock">In Stock</SelectItem>
                <SelectItem value="low">Low Stock</SelectItem>
                <SelectItem value="out">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Stock Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Warehouse</th>
                <th className="text-right">Opening</th>
                <th className="text-right">IN</th>
                <th className="text-right">OUT</th>
                <th className="text-right">Adj.</th>
                <th className="text-right">Closing</th>
                <th>Stock Level</th>
                <th>Status</th>
                <th className="text-right">Value</th>
              </tr>
            </thead>
            <tbody>
              {stockItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div>
                      <p className="font-medium">{item.product}</p>
                      <code className="text-xs text-muted-foreground font-mono">
                        {item.sku}
                      </code>
                    </div>
                  </td>
                  <td>{item.warehouse}</td>
                  <td className="text-right font-mono">{item.opening}</td>
                  <td className="text-right font-mono text-success">
                    +{item.stockIn}
                  </td>
                  <td className="text-right font-mono text-destructive">
                    -{item.stockOut}
                  </td>
                  <td className="text-right font-mono">{item.adjustment}</td>
                  <td className="text-right font-mono font-semibold">
                    {item.closing}
                  </td>
                  <td className="w-32">
                    <div className="space-y-1">
                      <Progress
                        value={Math.min(
                          (item.closing / item.minStock) * 50,
                          100
                        )}
                        className="h-2"
                      />
                      <p className="text-xs text-muted-foreground">
                        Min: {item.minStock}
                      </p>
                    </div>
                  </td>
                  <td>{getStockStatus(item.closing, item.minStock)}</td>
                  <td className="text-right font-mono">
                    ₹{item.value.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stock;
