import { Search, Download, Filter } from "lucide-react";
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
  { id: 1, date: "2024-01-15", dealer: "ABC Suppliers", invoiceNo: "PO-2024-0089", type: "Purchase", debit: 125000, credit: 0, balance: 145000 },
  { id: 2, date: "2024-01-14", dealer: "ABC Suppliers", invoiceNo: "PAY-2024-0045", type: "Payment", debit: 0, credit: 100000, balance: 20000 },
  { id: 3, date: "2024-01-10", dealer: "Global Electronics", invoiceNo: "PO-2024-0088", type: "Purchase", debit: 85000, credit: 0, balance: 85000 },
  { id: 4, date: "2024-01-10", dealer: "Global Electronics", invoiceNo: "PAY-2024-0044", type: "Payment", debit: 0, credit: 85000, balance: 0 },
  { id: 5, date: "2024-01-08", dealer: "Tech Distributors", invoiceNo: "PO-2024-0087", type: "Purchase", debit: 160000, credit: 0, balance: 160000 },
  { id: 6, date: "2024-01-05", dealer: "ABC Suppliers", invoiceNo: "PO-2024-0086", type: "Purchase", debit: 120000, credit: 0, balance: 120000 },
];

const DealerLedger = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dealer Ledger</h1>
          <p className="text-muted-foreground">View purchase and payment history</p>
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
                <SelectValue placeholder="Select Dealer" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="all">All Dealers</SelectItem>
                <SelectItem value="abc">ABC Suppliers</SelectItem>
                <SelectItem value="global">Global Electronics</SelectItem>
                <SelectItem value="tech">Tech Distributors</SelectItem>
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
              <th>Dealer</th>
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
                <td className="font-medium">{entry.dealer}</td>
                <td>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{entry.invoiceNo}</code>
                </td>
                <td>{entry.type}</td>
                <td className="text-right font-mono text-destructive">
                  {entry.debit > 0 ? `₹${entry.debit.toLocaleString()}` : "-"}
                </td>
                <td className="text-right font-mono text-success">
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

export default DealerLedger;
