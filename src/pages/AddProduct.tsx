import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Save, Plus, X } from "lucide-react";
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
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AddProduct = () => {
  const navigate = useNavigate();
  const [allowDiscount, setAllowDiscount] = useState(true);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Add New Product</h1>
          <p className="text-muted-foreground">
            Create a new product in your inventory
          </p>
        </div>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input id="name" placeholder="Enter product name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sku">SKU / Barcode *</Label>
                  <Input id="sku" placeholder="e.g., PRD-001" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="phones">Mobile Phones</SelectItem>
                      <SelectItem value="laptops">Laptops</SelectItem>
                      <SelectItem value="tablets">Tablets</SelectItem>
                      <SelectItem value="audio">Audio</SelectItem>
                      <SelectItem value="cameras">Cameras</SelectItem>
                      <SelectItem value="tv">Televisions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="brand">Brand</Label>
                  <Select>
                    <SelectTrigger id="brand">
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="samsung">Samsung</SelectItem>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="sony">Sony</SelectItem>
                      <SelectItem value="dell">Dell</SelectItem>
                      <SelectItem value="lg">LG</SelectItem>
                      <SelectItem value="canon">Canon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unit">Unit *</Label>
                  <Select>
                    <SelectTrigger id="unit">
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="pcs">Pieces (Pcs)</SelectItem>
                      <SelectItem value="kg">Kilograms (Kg)</SelectItem>
                      <SelectItem value="ltr">Liters (Ltr)</SelectItem>
                      <SelectItem value="mtr">Meters (Mtr)</SelectItem>
                      <SelectItem value="box">Box</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter product description..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pricing & Tax</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="purchase_price">Purchase Price *</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      ₹
                    </span>
                    <Input
                      id="purchase_price"
                      type="number"
                      placeholder="0.00"
                      className="pl-7"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="selling_price">Selling Price *</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      ₹
                    </span>
                    <Input
                      id="selling_price"
                      type="number"
                      placeholder="0.00"
                      className="pl-7"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tax">GST Rate (%)</Label>
                  <Select>
                    <SelectTrigger id="tax">
                      <SelectValue placeholder="Select tax rate" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="0">0% (Exempt)</SelectItem>
                      <SelectItem value="5">5%</SelectItem>
                      <SelectItem value="12">12%</SelectItem>
                      <SelectItem value="18">18%</SelectItem>
                      <SelectItem value="28">28%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="min_stock">Minimum Stock Alert</Label>
                  <Input
                    id="min_stock"
                    type="number"
                    placeholder="e.g., 10"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="discount">Allow Discount</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable discounts for this product during sales
                  </p>
                </div>
                <Switch
                  id="discount"
                  checked={allowDiscount}
                  onCheckedChange={setAllowDiscount}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                <p className="text-sm font-medium">Click to upload</p>
                <p className="text-xs text-muted-foreground mt-1">
                  PNG, JPG up to 5MB
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Opening Stock</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="warehouse">Warehouse</Label>
                <Select>
                  <SelectTrigger id="warehouse">
                    <SelectValue placeholder="Select warehouse" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="main">Main Warehouse</SelectItem>
                    <SelectItem value="a">Warehouse A</SelectItem>
                    <SelectItem value="b">Warehouse B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="opening_stock">Opening Stock Quantity</Label>
                <Input
                  id="opening_stock"
                  type="number"
                  placeholder="0"
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Save className="h-4 w-4" />
              Save Product
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Plus className="h-4 w-4" />
              Save & Add Another
            </Button>
            <Button variant="ghost" className="w-full" onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
