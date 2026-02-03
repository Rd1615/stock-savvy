import { useState } from "react";
import { Plus, Search, Edit, Trash2, MoreHorizontal } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const brandsData = [
  { id: 1, name: "Samsung", products: 156, status: "active" },
  { id: 2, name: "Apple", products: 98, status: "active" },
  { id: 3, name: "Sony", products: 87, status: "active" },
  { id: 4, name: "Dell", products: 65, status: "active" },
  { id: 5, name: "LG", products: 54, status: "active" },
  { id: 6, name: "Canon", products: 43, status: "active" },
  { id: 7, name: "Bose", products: 32, status: "active" },
  { id: 8, name: "HP", products: 28, status: "inactive" },
];

const Brands = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Brands</h1>
          <p className="text-muted-foreground">Manage product brands</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4" />
              Add Brand
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card">
            <DialogHeader>
              <DialogTitle>Add New Brand</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Brand Name</Label>
                <Input id="name" placeholder="Enter brand name" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Save Brand
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card rounded-xl border border-border p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search brands..." className="pl-9" />
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="data-table">
          <thead>
            <tr>
              <th>Brand Name</th>
              <th className="text-right">Products</th>
              <th>Status</th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody>
            {brandsData.map((brand) => (
              <tr key={brand.id} className="group">
                <td className="font-medium">{brand.name}</td>
                <td className="text-right">{brand.products}</td>
                <td>
                  <Badge
                    className={
                      brand.status === "active"
                        ? "status-badge status-paid"
                        : "status-badge status-pending"
                    }
                  >
                    {brand.status}
                  </Badge>
                </td>
                <td>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100"
                      >
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Brands;
