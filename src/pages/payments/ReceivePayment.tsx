import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recentReceipts = [
  { id: 1, receiptNo: "RCV-2024-0078", client: "Rahul Enterprises", date: "2024-01-15", amount: 100000, method: "UPI" },
  { id: 2, receiptNo: "RCV-2024-0077", client: "Tech Solutions", date: "2024-01-14", amount: 285000, method: "Bank" },
  { id: 3, receiptNo: "RCV-2024-0076", client: "Sharma & Co.", date: "2024-01-12", amount: 50000, method: "Cash" },
];

const ReceivePayment = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Receive Payment</h1>
          <p className="text-muted-foreground">Record payment received from clients</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Client *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select client" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="rahul">Rahul Enterprises (Pending: ₹45,000)</SelectItem>
                  <SelectItem value="sharma">Sharma & Co. (Pending: ₹50,000)</SelectItem>
                  <SelectItem value="digital">Digital World (Pending: ₹50,000)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Invoice (Optional)</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select invoice to pay" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="inv158">INV-2024-0158 - ₹24,500</SelectItem>
                  <SelectItem value="inv155">INV-2024-0155 - ₹25,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Amount Received *</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                  <Input type="number" placeholder="0" className="pl-7" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Date *</Label>
                <Input type="date" defaultValue={new Date().toISOString().split("T")[0]} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Payment Method *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="upi">UPI</SelectItem>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                  <SelectItem value="cheque">Cheque</SelectItem>
                  <SelectItem value="card">Card</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Notes</Label>
              <Textarea placeholder="Enter payment notes..." rows={2} />
            </div>
            <Button className="w-full gap-2 bg-success text-success-foreground hover:bg-success/90">
              <Save className="h-4 w-4" />
              Record Payment
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Receipts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReceipts.map((receipt) => (
                <div key={receipt.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{receipt.client}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <code className="text-xs">{receipt.receiptNo}</code>
                      <span>•</span>
                      <span>{receipt.date}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-semibold text-success">₹{receipt.amount.toLocaleString()}</p>
                    <Badge variant="outline" className="text-xs">{receipt.method}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReceivePayment;
