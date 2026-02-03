import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Plus,
  Filter,
  Download,
  MoreHorizontal,
  Eye,
  Edit,
  Printer,
  Share2,
  ChevronLeft,
  ChevronRight,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const salesInvoices = [
  {
    id: 1,
    invoiceNo: "INV-2024-0158",
    client: "Rahul Enterprises",
    date: "2024-01-15",
    dueDate: "2024-01-30",
    total: 124500,
    paid: 100000,
    pending: 24500,
    status: "partial",
    items: 5,
  },
  {
    id: 2,
    invoiceNo: "INV-2024-0157",
    client: "Tech Solutions Pvt Ltd",
    date: "2024-01-14",
    dueDate: "2024-01-29",
    total: 285000,
    paid: 285000,
    pending: 0,
    status: "paid",
    items: 8,
  },
  {
    id: 3,
    invoiceNo: "INV-2024-0156",
    client: "Sharma & Co.",
    date: "2024-01-13",
    dueDate: "2024-01-28",
    total: 65000,
    paid: 0,
    pending: 65000,
    status: "unpaid",
    items: 3,
  },
  {
    id: 4,
    invoiceNo: "INV-2024-0155",
    client: "Digital World",
    date: "2024-01-12",
    dueDate: "2024-01-27",
    total: 198000,
    paid: 198000,
    pending: 0,
    status: "paid",
    items: 6,
  },
  {
    id: 5,
    invoiceNo: "INV-2024-0154",
    client: "Gadget Hub",
    date: "2024-01-11",
    dueDate: "2024-01-26",
    total: 45000,
    paid: 20000,
    pending: 25000,
    status: "partial",
    items: 2,
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "paid":
      return <Badge className="status-badge status-paid">Paid</Badge>;
    case "partial":
      return <Badge className="status-badge status-partial">Partial</Badge>;
    case "unpaid":
      return <Badge className="status-badge status-unpaid">Unpaid</Badge>;
    default:
      return null;
  }
};

const Sales = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Sales Invoices</h1>
          <p className="text-muted-foreground">
            Manage your sales and invoices
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Link to="/sales/create">
            <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4" />
              New Sale
            </Button>
          </Link>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Total Sales</p>
          <p className="text-2xl font-bold">₹7,17,500</p>
          <p className="text-xs text-muted-foreground mt-1">This month</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Received</p>
          <p className="text-2xl font-bold text-success">₹6,03,000</p>
          <p className="text-xs text-muted-foreground mt-1">84.1%</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Pending</p>
          <p className="text-2xl font-bold text-destructive">₹1,14,500</p>
          <p className="text-xs text-muted-foreground mt-1">3 invoices</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Total Invoices</p>
          <p className="text-2xl font-bold">158</p>
          <p className="text-xs text-muted-foreground mt-1">This month</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by invoice number or client..."
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Select>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="partial">Partial</SelectItem>
                <SelectItem value="unpaid">Unpaid</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Sales Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Invoice No.</th>
                <th>Client</th>
                <th>Date</th>
                <th>Due Date</th>
                <th>Items</th>
                <th className="text-right">Total</th>
                <th className="text-right">Paid</th>
                <th className="text-right">Pending</th>
                <th>Status</th>
                <th className="w-12"></th>
              </tr>
            </thead>
            <tbody>
              {salesInvoices.map((invoice) => (
                <tr key={invoice.id} className="group">
                  <td>
                    <code className="text-sm font-mono font-semibold text-accent">
                      {invoice.invoiceNo}
                    </code>
                  </td>
                  <td className="font-medium">{invoice.client}</td>
                  <td>{invoice.date}</td>
                  <td>{invoice.dueDate}</td>
                  <td>{invoice.items} items</td>
                  <td className="text-right font-mono font-semibold">
                    ₹{invoice.total.toLocaleString()}
                  </td>
                  <td className="text-right font-mono text-success">
                    ₹{invoice.paid.toLocaleString()}
                  </td>
                  <td className="text-right font-mono text-destructive">
                    ₹{invoice.pending.toLocaleString()}
                  </td>
                  <td>{getStatusBadge(invoice.status)}</td>
                  <td>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-popover">
                        <DropdownMenuItem className="gap-2">
                          <Eye className="h-4 w-4" />
                          View Invoice
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Edit className="h-4 w-4" />
                          Edit Invoice
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Printer className="h-4 w-4" />
                          Print PDF
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Share2 className="h-4 w-4" />
                          Share (WhatsApp)
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 text-destructive">
                          Delete Invoice
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-border">
          <div className="text-sm text-muted-foreground">
            Showing 1 to 5 of 158 invoices
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="min-w-[32px]">
              1
            </Button>
            <Button variant="ghost" size="sm" className="min-w-[32px]">
              2
            </Button>
            <Button variant="ghost" size="sm" className="min-w-[32px]">
              3
            </Button>
            <span className="text-muted-foreground">...</span>
            <Button variant="ghost" size="sm" className="min-w-[32px]">
              32
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
