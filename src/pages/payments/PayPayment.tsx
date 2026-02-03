import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
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

const recentPayments = [
  { id: 1, paymentNo: "PAY-2024-0045", dealer: "ABC Suppliers", date: "2024-01-14", amount: 100000, method: "Bank" },
  { id: 2, paymentNo: "PAY-2024-0044", dealer: "Global Electronics", date: "2024-01-10", amount: 85000, method: "UPI" },
  { id: 3, paymentNo: "PAY-2024-0043", dealer: "Tech Distributors", date: "2024-01-08", amount: 50000, method: "Cheque" },
];

const PayPayment = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Pay Payment</h1>
          <p className="text-muted-foreground">Record payment made to dealers</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Dealer *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select dealer" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="abc">ABC Suppliers (Pending: ₹1,45,000)</SelectItem>
                  <SelectItem value="tech">Tech Distributors (Pending: ₹1,60,000)</SelectItem>
                  <SelectItem value="prime">Prime Wholesale (Pending: ₹0)</SelectItem>
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
                  <SelectItem value="po89">PO-2024-0089 - ₹25,000</SelectItem>
                  <SelectItem value="po86">PO-2024-0086 - ₹1,20,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Amount Paid *</Label>
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
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Notes</Label>
              <Textarea placeholder="Enter payment notes..." rows={2} />
            </div>
            <Button className="w-full gap-2 bg-info text-info-foreground hover:bg-info/90">
              <Save className="h-4 w-4" />
              Record Payment
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{payment.dealer}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <code className="text-xs">{payment.paymentNo}</code>
                      <span>•</span>
                      <span>{payment.date}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-semibold text-info">₹{payment.amount.toLocaleString()}</p>
                    <Badge variant="outline" className="text-xs">{payment.method}</Badge>
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

export default PayPayment;
