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

const purchaseInvoices = [
  { id: 1, invoiceNo: "PO-2024-0089", dealer: "ABC Suppliers", date: "2024-01-15", total: 125000, paid: 100000, pending: 25000, status: "partial", items: 12 },
  { id: 2, invoiceNo: "PO-2024-0088", dealer: "Global Electronics", date: "2024-01-14", total: 85000, paid: 85000, pending: 0, status: "paid", items: 8 },
  { id: 3, invoiceNo: "PO-2024-0087", dealer: "Tech Distributors", date: "2024-01-12", total: 160000, paid: 0, pending: 160000, status: "unpaid", items: 15 },
  { id: 4, invoiceNo: "PO-2024-0086", dealer: "Prime Wholesale", date: "2024-01-10", total: 95000, paid: 95000, pending: 0, status: "paid", items: 6 },
  { id: 5, invoiceNo: "PO-2024-0085", dealer: "ABC Suppliers", date: "2024-01-08", total: 78000, paid: 50000, pending: 28000, status: "partial", items: 9 },
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

const Purchases = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Purchase Invoices</h1>
          <p className="text-muted-foreground">Manage your purchases from dealers</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Link to="/purchases/create">
            <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4" />
              New Purchase
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Total Purchases</p>
          <p className="text-2xl font-bold">₹5,43,000</p>
          <p className="text-xs text-muted-foreground mt-1">This month</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Paid</p>
          <p className="text-2xl font-bold text-success">₹3,30,000</p>
          <p className="text-xs text-muted-foreground mt-1">60.8%</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Pending</p>
          <p className="text-2xl font-bold text-destructive">₹2,13,000</p>
          <p className="text-xs text-muted-foreground mt-1">3 invoices</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Total Orders</p>
          <p className="text-2xl font-bold">89</p>
          <p className="text-xs text-muted-foreground mt-1">This month</p>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search by PO number or dealer..." className="pl-9" />
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
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="data-table">
          <thead>
            <tr>
              <th>PO Number</th>
              <th>Dealer</th>
              <th>Date</th>
              <th>Items</th>
              <th className="text-right">Total</th>
              <th className="text-right">Paid</th>
              <th className="text-right">Pending</th>
              <th>Status</th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody>
            {purchaseInvoices.map((invoice) => (
              <tr key={invoice.id} className="group">
                <td>
                  <code className="text-sm font-mono font-semibold text-info">{invoice.invoiceNo}</code>
                </td>
                <td className="font-medium">{invoice.dealer}</td>
                <td>{invoice.date}</td>
                <td>{invoice.items} items</td>
                <td className="text-right font-mono font-semibold">₹{invoice.total.toLocaleString()}</td>
                <td className="text-right font-mono text-success">₹{invoice.paid.toLocaleString()}</td>
                <td className="text-right font-mono text-destructive">₹{invoice.pending.toLocaleString()}</td>
                <td>{getStatusBadge(invoice.status)}</td>
                <td>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-popover">
                      <DropdownMenuItem className="gap-2">
                        <Eye className="h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Edit className="h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Printer className="h-4 w-4" />
                        Print
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="gap-2 text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-4 py-3 border-t border-border">
          <div className="text-sm text-muted-foreground">Showing 1 to 5 of 89 purchases</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="ghost" size="sm">2</Button>
            <Button variant="ghost" size="sm">3</Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchases;
