import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Plus, Trash2, AlertTriangle } from "lucide-react";
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

const StockDamage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([{ product: "", qty: "", reason: "" }]);

  const addItem = () => {
    setItems([...items, { product: "", qty: "", reason: "" }]);
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
          <h1 className="text-2xl font-bold">Damage / Expired Stock</h1>
          <p className="text-muted-foreground">Record damaged or expired inventory</p>
        </div>
      </div>

      <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 flex items-center gap-3">
        <AlertTriangle className="h-5 w-5 text-destructive" />
        <p className="text-sm text-destructive">
          Recording damaged/expired stock will remove these items from your inventory and update stock values.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Entry Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Type *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="damage">Damaged</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                  <SelectItem value="defective">Defective</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Warehouse *</Label>
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
            <div className="space-y-2">
              <Label>Date *</Label>
              <Input type="date" defaultValue={new Date().toISOString().split("T")[0]} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Damaged Products</CardTitle>
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
                <div className="w-48 space-y-2">
                  <Label>Reason *</Label>
                  <Input placeholder="Describe damage" />
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
          <CardTitle>Additional Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Describe the damage in detail..." rows={3} />
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button className="gap-2 bg-destructive text-destructive-foreground hover:bg-destructive/90">
          <Save className="h-4 w-4" />
          Record Damage
        </Button>
      </div>
    </div>
  );
};

export default StockDamage;
