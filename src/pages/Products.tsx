import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Plus,
  Filter,
  Download,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  History,
  ChevronLeft,
  ChevronRight,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    sku: "SAM-S24U-256",
    category: "Mobile Phones",
    brand: "Samsung",
    unit: "Pcs",
    purchasePrice: 95000,
    sellingPrice: 120000,
    stock: 45,
    status: "active",
  },
  {
    id: 2,
    name: "Apple MacBook Pro 14\"",
    sku: "APL-MBP14-512",
    category: "Laptops",
    brand: "Apple",
    unit: "Pcs",
    purchasePrice: 145000,
    sellingPrice: 172500,
    stock: 23,
    status: "active",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    sku: "SNY-WH5-BLK",
    category: "Audio",
    brand: "Sony",
    unit: "Pcs",
    purchasePrice: 22000,
    sellingPrice: 28000,
    stock: 78,
    status: "active",
  },
  {
    id: 4,
    name: "Dell XPS 15",
    sku: "DEL-XPS15-1TB",
    category: "Laptops",
    brand: "Dell",
    unit: "Pcs",
    purchasePrice: 98000,
    sellingPrice: 120000,
    stock: 5,
    status: "low_stock",
  },
  {
    id: 5,
    name: "iPad Pro 12.9\"",
    sku: "APL-IPAD-256",
    category: "Tablets",
    brand: "Apple",
    unit: "Pcs",
    purchasePrice: 85000,
    sellingPrice: 110000,
    stock: 0,
    status: "out_of_stock",
  },
  {
    id: 6,
    name: "Bose QuietComfort 45",
    sku: "BSE-QC45-BLK",
    category: "Audio",
    brand: "Bose",
    unit: "Pcs",
    purchasePrice: 25000,
    sellingPrice: 32000,
    stock: 34,
    status: "active",
  },
  {
    id: 7,
    name: "Canon EOS R5",
    sku: "CAN-EOSR5-BDY",
    category: "Cameras",
    brand: "Canon",
    unit: "Pcs",
    purchasePrice: 285000,
    sellingPrice: 340000,
    stock: 8,
    status: "active",
  },
  {
    id: 8,
    name: "LG C3 65\" OLED TV",
    sku: "LG-C3-65",
    category: "Televisions",
    brand: "LG",
    unit: "Pcs",
    purchasePrice: 145000,
    sellingPrice: 175000,
    stock: 12,
    status: "active",
  },
];

const getStatusBadge = (status: string, stock: number) => {
  if (stock === 0) {
    return <Badge className="status-badge status-unpaid">Out of Stock</Badge>;
  }
  if (stock <= 10) {
    return <Badge className="status-badge status-pending">Low Stock</Badge>;
  }
  return <Badge className="status-badge status-paid">In Stock</Badge>;
};

const Products = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const toggleProduct = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((p) => p.id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-muted-foreground">
            Manage your product inventory
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Link to="/products/add">
            <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4" />
              Add Product
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name, SKU, or barcode..."
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="phones">Mobile Phones</SelectItem>
                <SelectItem value="laptops">Laptops</SelectItem>
                <SelectItem value="tablets">Tablets</SelectItem>
                <SelectItem value="audio">Audio</SelectItem>
                <SelectItem value="cameras">Cameras</SelectItem>
                <SelectItem value="tv">Televisions</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="all">All Brands</SelectItem>
                <SelectItem value="samsung">Samsung</SelectItem>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="sony">Sony</SelectItem>
                <SelectItem value="dell">Dell</SelectItem>
                <SelectItem value="lg">LG</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">In Stock</SelectItem>
                <SelectItem value="low">Low Stock</SelectItem>
                <SelectItem value="out">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-12">
                  <Checkbox
                    checked={selectedProducts.length === products.length}
                    onCheckedChange={toggleAll}
                  />
                </th>
                <th>Product</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Brand</th>
                <th className="text-right">Purchase Price</th>
                <th className="text-right">Selling Price</th>
                <th className="text-right">Stock</th>
                <th>Status</th>
                <th className="w-12"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="group">
                  <td>
                    <Checkbox
                      checked={selectedProducts.includes(product.id)}
                      onCheckedChange={() => toggleProduct(product.id)}
                    />
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                        <Package className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td>
                    <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                      {product.sku}
                    </code>
                  </td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td className="text-right font-mono">
                    ₹{product.purchasePrice.toLocaleString()}
                  </td>
                  <td className="text-right font-mono">
                    ₹{product.sellingPrice.toLocaleString()}
                  </td>
                  <td className="text-right font-semibold">
                    {product.stock} {product.unit}
                  </td>
                  <td>{getStatusBadge(product.status, product.stock)}</td>
                  <td>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-popover">
                        <DropdownMenuItem className="gap-2">
                          <Eye className="h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Edit className="h-4 w-4" />
                          Edit Product
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <History className="h-4 w-4" />
                          Stock History
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
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

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-border">
          <div className="text-sm text-muted-foreground">
            Showing 1 to {products.length} of {products.length} products
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="min-w-[32px]">
              1
            </Button>
            <Button variant="ghost" size="sm" className="min-w-[32px]">
              2
            </Button>
            <Button variant="ghost" size="sm" className="min-w-[32px]">
              3
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
