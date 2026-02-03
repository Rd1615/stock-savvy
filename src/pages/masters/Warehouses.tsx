import { useState } from "react";
import { Plus, Search, Edit, Trash2, MoreHorizontal, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const warehousesData = [
  { id: 1, name: "Main Warehouse", location: "Mumbai", products: 856, value: 4500000, status: "active" },
  { id: 2, name: "Warehouse A", location: "Delhi", products: 324, value: 1800000, status: "active" },
  { id: 3, name: "Warehouse B", location: "Bangalore", products: 178, value: 950000, status: "active" },
  { id: 4, name: "Warehouse C", location: "Chennai", products: 0, value: 0, status: "inactive" },
];

const Warehouses = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Warehouses / Godowns</h1>
          <p className="text-muted-foreground">Manage storage locations</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4" />
              Add Warehouse
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card">
            <DialogHeader>
              <DialogTitle>Add New Warehouse</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Warehouse Name</Label>
                <Input id="name" placeholder="e.g., Main Warehouse" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location / City</Label>
                <Input id="location" placeholder="e.g., Mumbai" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Full Address</Label>
                <Textarea id="address" placeholder="Enter full address" rows={2} />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Save Warehouse
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {warehousesData.map((warehouse) => (
          <div
            key={warehouse.id}
            className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">{warehouse.name}</h3>
                  <p className="text-sm text-muted-foreground">{warehouse.location}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-popover">
                  <DropdownMenuItem className="gap-2">
                    <Edit className="h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2 text-destructive">
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Products</span>
                <span className="font-semibold">{warehouse.products}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Stock Value</span>
                <span className="font-semibold">₹{(warehouse.value / 100000).toFixed(1)}L</span>
              </div>
              <div className="pt-2">
                <Badge
                  className={
                    warehouse.status === "active"
                      ? "status-badge status-paid"
                      : "status-badge status-pending"
                  }
                >
                  {warehouse.status}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Warehouses;
