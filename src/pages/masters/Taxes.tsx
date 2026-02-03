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

const taxesData = [
  { id: 1, name: "GST 0%", rate: 0, type: "Exempt", products: 45 },
  { id: 2, name: "GST 5%", rate: 5, type: "CGST 2.5% + SGST 2.5%", products: 156 },
  { id: 3, name: "GST 12%", rate: 12, type: "CGST 6% + SGST 6%", products: 234 },
  { id: 4, name: "GST 18%", rate: 18, type: "CGST 9% + SGST 9%", products: 567 },
  { id: 5, name: "GST 28%", rate: 28, type: "CGST 14% + SGST 14%", products: 89 },
];

const Taxes = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Taxes (GST)</h1>
          <p className="text-muted-foreground">Manage tax rates and categories</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4" />
              Add Tax Rate
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card">
            <DialogHeader>
              <DialogTitle>Add New Tax Rate</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Tax Name</Label>
                <Input id="name" placeholder="e.g., GST 18%" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rate">Tax Rate (%)</Label>
                <Input id="rate" type="number" placeholder="e.g., 18" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Save Tax Rate
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card rounded-xl border border-border p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search tax rates..." className="pl-9" />
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="data-table">
          <thead>
            <tr>
              <th>Tax Name</th>
              <th>Rate</th>
              <th>Type</th>
              <th className="text-right">Products Using</th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody>
            {taxesData.map((tax) => (
              <tr key={tax.id} className="group">
                <td className="font-medium">{tax.name}</td>
                <td>
                  <Badge variant="outline" className="font-mono">
                    {tax.rate}%
                  </Badge>
                </td>
                <td className="text-sm text-muted-foreground">{tax.type}</td>
                <td className="text-right">{tax.products}</td>
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

export default Taxes;
