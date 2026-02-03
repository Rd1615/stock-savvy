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

const unitsData = [
  { id: 1, name: "Pieces", shortName: "Pcs", products: 856 },
  { id: 2, name: "Kilograms", shortName: "Kg", products: 124 },
  { id: 3, name: "Liters", shortName: "Ltr", products: 67 },
  { id: 4, name: "Meters", shortName: "Mtr", products: 45 },
  { id: 5, name: "Box", shortName: "Box", products: 89 },
  { id: 6, name: "Dozen", shortName: "Dzn", products: 34 },
  { id: 7, name: "Pair", shortName: "Pr", products: 23 },
];

const Units = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Units</h1>
          <p className="text-muted-foreground">Manage measurement units</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4" />
              Add Unit
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card">
            <DialogHeader>
              <DialogTitle>Add New Unit</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Unit Name</Label>
                <Input id="name" placeholder="e.g., Pieces" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="short">Short Name</Label>
                <Input id="short" placeholder="e.g., Pcs" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Save Unit
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card rounded-xl border border-border p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search units..." className="pl-9" />
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="data-table">
          <thead>
            <tr>
              <th>Unit Name</th>
              <th>Short Name</th>
              <th className="text-right">Products Using</th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody>
            {unitsData.map((unit) => (
              <tr key={unit.id} className="group">
                <td className="font-medium">{unit.name}</td>
                <td>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    {unit.shortName}
                  </code>
                </td>
                <td className="text-right">{unit.products}</td>
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

export default Units;
