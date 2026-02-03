import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Plus, Trash2, Printer, Share2 } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";

const CreateSale = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { product: "", qty: 1, price: 0, discount: 0, gst: 18, total: 0 },
  ]);

  const addItem = () => {
    setItems([...items, { product: "", qty: 1, price: 0, discount: 0, gst: 18, total: 0 }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const subtotal = 98000;
  const discountTotal = 3000;
  const gstTotal = 17100;
  const grandTotal = 112100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Create Sales Invoice</h1>
            <p className="text-muted-foreground">Create a new sale for client</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Printer className="h-4 w-4" />
            Preview
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Invoice Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Client *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select client" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="rahul">Rahul Enterprises</SelectItem>
                      <SelectItem value="tech">Tech Solutions Pvt Ltd</SelectItem>
                      <SelectItem value="sharma">Sharma & Co.</SelectItem>
                      <SelectItem value="digital">Digital World</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Invoice Number</Label>
                  <Input value="INV-2024-0159" disabled className="bg-muted" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Invoice Date *</Label>
                  <Input type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                </div>
                <div className="space-y-2">
                  <Label>Warehouse</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select warehouse" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="main">Main Warehouse</SelectItem>
                      <SelectItem value="a">Warehouse A</SelectItem>
                      <SelectItem value="b">Warehouse B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Notes</Label>
                <Textarea placeholder="Enter any notes..." rows={2} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Products</CardTitle>
              <Button variant="outline" size="sm" onClick={addItem} className="gap-2">
                <Plus className="h-4 w-4" />
                Add Product
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-12 gap-2 text-sm font-medium text-muted-foreground">
                  <div className="col-span-4">Product</div>
                  <div className="col-span-1">Qty</div>
                  <div className="col-span-2">Price</div>
                  <div className="col-span-1">Disc%</div>
                  <div className="col-span-1">GST%</div>
                  <div className="col-span-2 text-right">Total</div>
                  <div className="col-span-1"></div>
                </div>
                {items.map((item, index) => (
                  <div key={index} className="grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover">
                          <SelectItem value="samsung">Samsung Galaxy S24 Ultra</SelectItem>
                          <SelectItem value="macbook">Apple MacBook Pro 14"</SelectItem>
                          <SelectItem value="sony">Sony WH-1000XM5</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-1">
                      <Input type="number" defaultValue={1} className="text-center" />
                    </div>
                    <div className="col-span-2">
                      <Input type="number" placeholder="0" />
                    </div>
                    <div className="col-span-1">
                      <Input type="number" defaultValue={0} className="text-center" />
                    </div>
                    <div className="col-span-1">
                      <Input type="number" defaultValue={18} className="text-center" />
                    </div>
                    <div className="col-span-2 text-right font-mono font-semibold">₹0</div>
                    <div className="col-span-1 flex justify-center">
                      {items.length > 1 && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive h-8 w-8"
                          onClick={() => removeItem(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-mono">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Discount</span>
                <span className="font-mono text-destructive">-₹{discountTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">GST</span>
                <span className="font-mono">₹{gstTotal.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Grand Total</span>
                <span className="font-mono">₹{grandTotal.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Received Amount</Label>
                <Input type="number" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label>Payment Method</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                    <SelectItem value="card">Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Pending</span>
                <span className="font-mono text-destructive">₹{grandTotal.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-2">
            <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Save className="h-4 w-4" />
              Save Invoice
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Printer className="h-4 w-4" />
              Save & Print
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Share2 className="h-4 w-4" />
              Save & WhatsApp
            </Button>
            <Button variant="ghost" className="w-full" onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSale;
