import { Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ledgerData = [
  { id: 1, date: "2024-01-15", client: "Rahul Enterprises", invoiceNo: "INV-2024-0158", type: "Sale", debit: 124500, credit: 0, balance: 45000 },
  { id: 2, date: "2024-01-14", client: "Rahul Enterprises", invoiceNo: "RCV-2024-0078", type: "Receipt", debit: 0, credit: 100000, balance: -79500 },
  { id: 3, date: "2024-01-12", client: "Tech Solutions", invoiceNo: "INV-2024-0157", type: "Sale", debit: 285000, credit: 0, balance: 285000 },
  { id: 4, date: "2024-01-12", client: "Tech Solutions", invoiceNo: "RCV-2024-0077", type: "Receipt", debit: 0, credit: 285000, balance: 0 },
  { id: 5, date: "2024-01-10", client: "Sharma & Co.", invoiceNo: "INV-2024-0156", type: "Sale", debit: 65000, credit: 0, balance: 50000 },
  { id: 6, date: "2024-01-08", client: "Digital World", invoiceNo: "INV-2024-0155", type: "Sale", debit: 198000, credit: 0, balance: 50000 },
];

const ClientLedger = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Client Ledger</h1>
          <p className="text-muted-foreground">View sales and payment history</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search transactions..." className="pl-9" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Client" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="all">All Clients</SelectItem>
                <SelectItem value="rahul">Rahul Enterprises</SelectItem>
                <SelectItem value="tech">Tech Solutions</SelectItem>
                <SelectItem value="sharma">Sharma & Co.</SelectItem>
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
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Client</th>
              <th>Reference</th>
              <th>Type</th>
              <th className="text-right">Debit (₹)</th>
              <th className="text-right">Credit (₹)</th>
              <th className="text-right">Balance (₹)</th>
            </tr>
          </thead>
          <tbody>
            {ledgerData.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.date}</td>
                <td className="font-medium">{entry.client}</td>
                <td>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{entry.invoiceNo}</code>
                </td>
                <td>{entry.type}</td>
                <td className="text-right font-mono text-success">
                  {entry.debit > 0 ? `₹${entry.debit.toLocaleString()}` : "-"}
                </td>
                <td className="text-right font-mono text-destructive">
                  {entry.credit > 0 ? `₹${entry.credit.toLocaleString()}` : "-"}
                </td>
                <td className="text-right font-mono font-semibold">
                  ₹{entry.balance.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientLedger;
