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

const gstData = [
  { type: "CGST Collected", amount: 64575 },
  { type: "SGST Collected", amount: 64575 },
  { type: "IGST Collected", amount: 0 },
  { type: "Total Output GST", amount: 129150, isTotal: true },
  { type: "CGST Paid (Input)", amount: 48870 },
  { type: "SGST Paid (Input)", amount: 48870 },
  { type: "IGST Paid (Input)", amount: 0 },
  { type: "Total Input GST", amount: 97740, isTotal: true },
  { type: "Net GST Payable", amount: 31410, isNet: true },
];

const GSTReport = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">GST Report</h1>
          <p className="text-muted-foreground">GST summary and filing details</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="jan">
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="jan">January 2024</SelectItem>
              <SelectItem value="dec">December 2023</SelectItem>
              <SelectItem value="nov">November 2023</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export GSTR-1
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Output GST (Sales)</p>
            <p className="text-3xl font-bold">₹1,29,150</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Input GST (Purchases)</p>
            <p className="text-3xl font-bold">₹97,740</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Net GST Payable</p>
            <p className="text-3xl font-bold text-destructive">₹31,410</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>GST Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {gstData.map((item, i) => (
              <div
                key={i}
                className={`flex justify-between items-center p-3 rounded-lg ${
                  item.isNet
                    ? "bg-destructive/10 border border-destructive/20"
                    : item.isTotal
                    ? "bg-muted font-medium"
                    : ""
                }`}
              >
                <span className={item.isNet ? "font-bold" : ""}>{item.type}</span>
                <span className={`font-mono ${item.isNet ? "font-bold text-destructive" : "font-semibold"}`}>
                  ₹{item.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>GST Rate Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="data-table">
            <thead>
              <tr>
                <th>GST Rate</th>
                <th className="text-right">Taxable Value</th>
                <th className="text-right">CGST</th>
                <th className="text-right">SGST</th>
                <th className="text-right">Total GST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5%</td>
                <td className="text-right font-mono">₹1,25,000</td>
                <td className="text-right font-mono">₹3,125</td>
                <td className="text-right font-mono">₹3,125</td>
                <td className="text-right font-mono font-semibold">₹6,250</td>
              </tr>
              <tr>
                <td>12%</td>
                <td className="text-right font-mono">₹2,50,000</td>
                <td className="text-right font-mono">₹15,000</td>
                <td className="text-right font-mono">₹15,000</td>
                <td className="text-right font-mono font-semibold">₹30,000</td>
              </tr>
              <tr>
                <td>18%</td>
                <td className="text-right font-mono">₹4,15,000</td>
                <td className="text-right font-mono">₹37,350</td>
                <td className="text-right font-mono">₹37,350</td>
                <td className="text-right font-mono font-semibold">₹74,700</td>
              </tr>
              <tr>
                <td>28%</td>
                <td className="text-right font-mono">₹65,000</td>
                <td className="text-right font-mono">₹9,100</td>
                <td className="text-right font-mono">₹9,100</td>
                <td className="text-right font-mono font-semibold">₹18,200</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default GSTReport;
