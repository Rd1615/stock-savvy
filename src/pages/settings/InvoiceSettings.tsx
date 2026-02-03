import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InvoiceSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Invoice Settings</h1>
        <p className="text-muted-foreground">Configure invoice format and templates</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Invoice Numbering</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Sales Invoice Prefix</Label>
              <Input defaultValue="INV-" />
            </div>
            <div className="space-y-2">
              <Label>Purchase Invoice Prefix</Label>
              <Input defaultValue="PO-" />
            </div>
            <div className="space-y-2">
              <Label>Starting Number</Label>
              <Input type="number" defaultValue="1" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Include Year in Number</Label>
                <p className="text-sm text-muted-foreground">e.g., INV-2024-0001</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Invoice Format</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Paper Size</Label>
              <Select defaultValue="a4">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="a4">A4</SelectItem>
                  <SelectItem value="letter">Letter</SelectItem>
                  <SelectItem value="thermal">Thermal (80mm)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Currency Symbol</Label>
              <Input defaultValue="₹" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Show Company Logo</Label>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Show Signature</Label>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Terms & Conditions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Invoice Terms</Label>
              <Textarea
                defaultValue="1. Goods once sold will not be taken back.
2. Payment due within 30 days.
3. Interest @18% will be charged on overdue payments."
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label>Footer Notes</Label>
              <Textarea defaultValue="Thank you for your business!" rows={2} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
          <Save className="h-4 w-4" />
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default InvoiceSettings;
