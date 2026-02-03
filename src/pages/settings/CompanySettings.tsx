import { Save, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompanySettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Company Profile</h1>
        <p className="text-muted-foreground">Manage your business information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Business Name *</Label>
                  <Input defaultValue="StockPro Electronics" />
                </div>
                <div className="space-y-2">
                  <Label>Legal Name</Label>
                  <Input defaultValue="StockPro Electronics Pvt Ltd" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>GST Number</Label>
                  <Input defaultValue="27AABCS1234R1ZM" />
                </div>
                <div className="space-y-2">
                  <Label>PAN Number</Label>
                  <Input defaultValue="AABCS1234R" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Business Address</Label>
                <Textarea defaultValue="123, Business Park, Andheri East, Mumbai - 400069, Maharashtra" rows={2} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input defaultValue="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input defaultValue="info@stockpro.com" />
                </div>
                <div className="space-y-2">
                  <Label>Website</Label>
                  <Input defaultValue="www.stockpro.com" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bank Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Bank Name</Label>
                  <Input defaultValue="HDFC Bank" />
                </div>
                <div className="space-y-2">
                  <Label>Account Number</Label>
                  <Input defaultValue="50100123456789" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>IFSC Code</Label>
                  <Input defaultValue="HDFC0001234" />
                </div>
                <div className="space-y-2">
                  <Label>Branch</Label>
                  <Input defaultValue="Andheri East, Mumbai" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Logo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                <p className="text-sm font-medium">Click to upload</p>
                <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 2MB</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Digital Signature</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                <p className="text-sm font-medium">Upload Signature</p>
                <p className="text-xs text-muted-foreground mt-1">For invoices</p>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanySettings;
