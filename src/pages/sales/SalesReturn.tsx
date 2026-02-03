import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
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

const returns = [
  { id: 1, returnNo: "SR-2024-0018", originalInv: "INV-2024-0152", client: "Rahul Enterprises", date: "2024-01-14", amount: 12000, status: "completed" },
  { id: 2, returnNo: "SR-2024-0017", originalInv: "INV-2024-0148", client: "Tech Solutions", date: "2024-01-11", amount: 8500, status: "completed" },
  { id: 3, returnNo: "SR-2024-0016", originalInv: "INV-2024-0145", client: "Sharma & Co.", date: "2024-01-08", amount: 15000, status: "pending" },
];

const SalesReturn = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Sales Returns</h1>
          <p className="text-muted-foreground">Manage returns from clients</p>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search returns..." className="pl-9" />
          </div>
          <Select>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="data-table">
          <thead>
            <tr>
              <th>Return No.</th>
              <th>Original Invoice</th>
              <th>Client</th>
              <th>Date</th>
              <th className="text-right">Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {returns.map((item) => (
              <tr key={item.id}>
                <td>
                  <code className="text-sm font-mono font-semibold text-warning">{item.returnNo}</code>
                </td>
                <td>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{item.originalInv}</code>
                </td>
                <td className="font-medium">{item.client}</td>
                <td>{item.date}</td>
                <td className="text-right font-mono">₹{item.amount.toLocaleString()}</td>
                <td>
                  <Badge className={item.status === "completed" ? "status-badge status-paid" : "status-badge status-pending"}>
                    {item.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReturn;
