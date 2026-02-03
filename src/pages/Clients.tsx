import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Plus,
  Filter,
  Download,
  MoreHorizontal,
  Eye,
  Receipt,
  FileText,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const clients = [
  {
    id: 1,
    name: "Rahul Enterprises",
    contact: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul@enterprise.com",
    city: "Mumbai",
    totalSales: 245000,
    totalReceived: 200000,
    pending: 45000,
    status: "active",
  },
  {
    id: 2,
    name: "Tech Solutions Pvt Ltd",
    contact: "Amit Patel",
    phone: "+91 87654 32109",
    email: "amit@techsol.in",
    city: "Delhi",
    totalSales: 520000,
    totalReceived: 520000,
    pending: 0,
    status: "active",
  },
  {
    id: 3,
    name: "Sharma & Co.",
    contact: "Vikram Sharma",
    phone: "+91 76543 21098",
    email: "vikram@sharma.co",
    city: "Bangalore",
    totalSales: 180000,
    totalReceived: 130000,
    pending: 50000,
    status: "active",
  },
  {
    id: 4,
    name: "Digital World",
    contact: "Priya Singh",
    phone: "+91 65432 10987",
    email: "priya@digitalworld.com",
    city: "Chennai",
    totalSales: 340000,
    totalReceived: 290000,
    pending: 50000,
    status: "inactive",
  },
  {
    id: 5,
    name: "Gadget Hub",
    contact: "Arun Kumar",
    phone: "+91 54321 09876",
    email: "arun@gadgethub.in",
    city: "Hyderabad",
    totalSales: 125000,
    totalReceived: 125000,
    pending: 0,
    status: "active",
  },
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const Clients = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Clients</h1>
          <p className="text-muted-foreground">
            Manage your customers and their transactions
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Link to="/clients/add">
            <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4" />
              Add Client
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name, phone, or email..."
              className="pl-9"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 bg-accent">
                  <AvatarFallback className="bg-accent text-accent-foreground font-semibold">
                    {getInitials(client.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.contact}</p>
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
                    <Eye className="h-4 w-4" />
                    View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2">
                    <Receipt className="h-4 w-4" />
                    Create Sale
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2">
                    <FileText className="h-4 w-4" />
                    View Ledger
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2 text-destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{client.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{client.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{client.city}</span>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs text-muted-foreground">Total Sales</p>
                  <p className="font-semibold text-sm">
                    ₹{(client.totalSales / 1000).toFixed(0)}K
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Received</p>
                  <p className="font-semibold text-sm text-success">
                    ₹{(client.totalReceived / 1000).toFixed(0)}K
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Pending</p>
                  <p
                    className={`font-semibold text-sm ${
                      client.pending > 0 ? "text-destructive" : "text-success"
                    }`}
                  >
                    ₹{(client.pending / 1000).toFixed(0)}K
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
