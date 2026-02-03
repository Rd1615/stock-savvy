import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Plus, Trash2, ArrowRight } from "lucide-react";
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

const StockTransfer = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([{ product: "", qty: "" }]);

  const addItem = () => {
    setItems([...items, { product: "", qty: "" }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Stock Transfer</h1>
          <p className="text-muted-foreground">Transfer stock between warehouses</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transfer Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 items-end">
            <div className="sm:col-span-3 space-y-2">
              <Label>From Warehouse *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="main">Main Warehouse</SelectItem>
                  <SelectItem value="a">Warehouse A</SelectItem>
                  <SelectItem value="b">Warehouse B</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-center">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="sm:col-span-3 space-y-2">
              <Label>To Warehouse *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="main">Main Warehouse</SelectItem>
                  <SelectItem value="a">Warehouse A</SelectItem>
                  <SelectItem value="b">Warehouse B</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Transfer Date *</Label>
              <Input type="date" defaultValue={new Date().toISOString().split("T")[0]} />
            </div>
            <div className="space-y-2">
              <Label>Reference Number</Label>
              <Input placeholder="Enter reference" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Products to Transfer</CardTitle>
          <Button variant="outline" size="sm" onClick={addItem} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Item
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 items-end">
                <div className="flex-1 space-y-2">
                  <Label>Product *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="samsung">Samsung Galaxy S24 Ultra</SelectItem>
                      <SelectItem value="macbook">Apple MacBook Pro 14"</SelectItem>
                      <SelectItem value="sony">Sony WH-1000XM5</SelectItem>
                      <SelectItem value="dell">Dell XPS 15</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-32 space-y-2">
                  <Label>Quantity *</Label>
                  <Input type="number" placeholder="0" />
                </div>
                {items.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => removeItem(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transfer Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Enter any additional notes..." rows={3} />
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button className="gap-2 bg-info text-info-foreground hover:bg-info/90">
          <Save className="h-4 w-4" />
          Complete Transfer
        </Button>
      </div>
    </div>
  );
};

export default StockTransfer;
