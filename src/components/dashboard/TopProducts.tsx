import { Progress } from "@/components/ui/progress";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    category: "Mobile Phones",
    sold: 156,
    stock: 45,
    revenue: "₹18,72,000",
    progress: 85,
  },
  {
    id: 2,
    name: "Apple MacBook Pro 14\"",
    category: "Laptops",
    sold: 89,
    stock: 23,
    revenue: "₹15,34,500",
    progress: 72,
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    category: "Audio",
    sold: 234,
    stock: 78,
    revenue: "₹6,55,200",
    progress: 68,
  },
  {
    id: 4,
    name: "Dell XPS 15",
    category: "Laptops",
    sold: 67,
    stock: 31,
    revenue: "₹8,04,000",
    progress: 55,
  },
  {
    id: 5,
    name: "iPad Pro 12.9\"",
    category: "Tablets",
    sold: 112,
    stock: 56,
    revenue: "₹12,32,000",
    progress: 48,
  },
];

export function TopProducts() {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Top Selling Products</h3>
        <span className="text-sm text-muted-foreground">This Month</span>
      </div>
      <div className="space-y-5">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium text-sm">{product.name}</p>
                <p className="text-xs text-muted-foreground">{product.category}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-sm">{product.revenue}</p>
                <p className="text-xs text-muted-foreground">
                  {product.sold} sold · {product.stock} in stock
                </p>
              </div>
            </div>
            <Progress value={product.progress} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
