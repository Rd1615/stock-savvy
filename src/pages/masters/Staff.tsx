import { useState } from "react";
import { Plus, Search, Edit, Trash2, MoreHorizontal, Shield, User } from "lucide-react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const staffData = [
  { id: 1, name: "Admin User", email: "admin@stockpro.com", role: "Owner", userType: "owner", status: "active" },
  { id: 2, name: "Rahul Kumar", email: "rahul@stockpro.com", role: "Manager", userType: "staff", status: "active" },
  { id: 3, name: "Priya Singh", email: "priya@stockpro.com", role: "Sales Staff", userType: "staff", status: "active" },
  { id: 4, name: "Amit Patel", email: "amit@stockpro.com", role: "Accountant", userType: "staff", status: "active" },
  { id: 5, name: "Vikram Sharma", email: "vikram@stockpro.com", role: "Sales Staff", userType: "staff", status: "inactive" },
];

const getInitials = (name: string) => {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
};

const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case "Owner":
      return "bg-destructive/10 text-destructive";
    case "Manager":
      return "bg-accent/10 text-accent";
    case "Accountant":
      return "bg-info/10 text-info";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getUserTypeBadge = (userType: string) => {
  return userType === "owner" 
    ? "bg-warning/10 text-warning border-warning/20" 
    : "bg-muted text-muted-foreground";
};

const Staff = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Staff & Roles</h1>
          <p className="text-muted-foreground">Manage users and permissions</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4" />
              Add Staff
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card">
            <DialogHeader>
              <DialogTitle>Add New Staff Member</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="sales">Sales Staff</SelectItem>
                    <SelectItem value="accountant">Accountant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Add Staff
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card rounded-xl border border-border p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search staff..." className="pl-9" />
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="data-table">
          <thead>
            <tr>
              <th>Staff Member</th>
              <th>Email</th>
              <th>Type</th>
              <th>Role</th>
              <th>Status</th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff) => (
              <tr key={staff.id} className="group">
                <td>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-accent text-accent-foreground text-sm">
                        {getInitials(staff.name)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{staff.name}</span>
                  </div>
                </td>
                <td className="text-muted-foreground">{staff.email}</td>
                <td>
                  <Badge className={`${getUserTypeBadge(staff.userType)} text-xs`}>
                    {staff.userType}
                  </Badge>
                </td>
                <td>
                  <Badge className={`${getRoleBadgeColor(staff.role)} border-0`}>
                    {staff.role}
                  </Badge>
                </td>
                <td>
                  <Badge
                    className={
                      staff.status === "active"
                        ? "status-badge status-paid"
                        : "status-badge status-pending"
                    }
                  >
                    {staff.status}
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
                      <DropdownMenuItem className="gap-2">
                        <Shield className="h-4 w-4" />
                        Permissions
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

export default Staff;
