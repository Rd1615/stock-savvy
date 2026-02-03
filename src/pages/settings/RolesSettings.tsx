import { useState } from "react";
import { Plus, Edit, Trash2, Shield, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const rolesData = [
  {
    id: 1,
    name: "Administrator",
    users: 1,
    permissions: { dashboard: true, products: true, sales: true, purchases: true, reports: true, settings: true },
  },
  {
    id: 2,
    name: "Manager",
    users: 2,
    permissions: { dashboard: true, products: true, sales: true, purchases: true, reports: true, settings: false },
  },
  {
    id: 3,
    name: "Sales Staff",
    users: 3,
    permissions: { dashboard: true, products: false, sales: true, purchases: false, reports: false, settings: false },
  },
  {
    id: 4,
    name: "Accountant",
    users: 1,
    permissions: { dashboard: true, products: false, sales: true, purchases: true, reports: true, settings: false },
  },
];

const permissionLabels = {
  dashboard: "Dashboard",
  products: "Products & Stock",
  sales: "Sales & Clients",
  purchases: "Purchases & Dealers",
  reports: "Reports",
  settings: "Settings",
};

const RolesSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Roles & Permissions</h1>
          <p className="text-muted-foreground">Manage user roles and access levels</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4" />
              Add Role
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Role</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Role Name</Label>
                <Input placeholder="Enter role name" />
              </div>
              <div className="space-y-3">
                <Label>Permissions</Label>
                {Object.entries(permissionLabels).map(([key, label]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm">{label}</span>
                    <Switch />
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Create Role</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rolesData.map((role) => (
          <Card key={role.id}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-lg">{role.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{role.users} users</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                {role.name !== "Administrator" && (
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(role.permissions).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2 text-sm">
                    {value ? (
                      <Check className="h-4 w-4 text-success" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className={value ? "" : "text-muted-foreground"}>
                      {permissionLabels[key as keyof typeof permissionLabels]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RolesSettings;
