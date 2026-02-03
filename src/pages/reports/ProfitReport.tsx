import { Download, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ProfitReport = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Profit & Loss Report</h1>
          <p className="text-muted-foreground">Financial performance analysis</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Profit Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Sales</span>
                <span className="font-mono font-semibold text-success">₹7,17,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Cost of Goods Sold (COGS)</span>
                <span className="font-mono font-semibold text-destructive">-₹5,43,000</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="font-medium">Gross Profit</span>
                <span className="font-mono font-semibold">₹1,74,500</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Operating Expenses</span>
                <span className="font-mono text-destructive">-₹68,500</span>
              </div>
              <div className="flex justify-between items-center pl-4 text-sm">
                <span className="text-muted-foreground">- Rent</span>
                <span className="font-mono">₹45,000</span>
              </div>
              <div className="flex justify-between items-center pl-4 text-sm">
                <span className="text-muted-foreground">- Utilities</span>
                <span className="font-mono">₹12,500</span>
              </div>
              <div className="flex justify-between items-center pl-4 text-sm">
                <span className="text-muted-foreground">- Other</span>
                <span className="font-mono">₹11,000</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center text-lg">
                <span className="font-bold">Net Profit</span>
                <span className="font-mono font-bold text-success">₹1,06,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Net Profit</p>
                  <p className="text-3xl font-bold text-success">₹1.06L</p>
                </div>
                <div className="p-3 rounded-full bg-success/10">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
              </div>
              <p className="text-sm text-success mt-2">+15.2% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Profit Margin</p>
                  <p className="text-3xl font-bold">14.8%</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Gross: 24.3%</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Expenses Ratio</p>
                  <p className="text-3xl font-bold">9.5%</p>
                </div>
              </div>
              <p className="text-sm text-destructive mt-2">+2.1% from last month</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfitReport;
