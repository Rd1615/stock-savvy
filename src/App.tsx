import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Clients from "./pages/Clients";
import Sales from "./pages/Sales";
import Stock from "./pages/Stock";
import NotFound from "./pages/NotFound";

// Masters
import Categories from "./pages/masters/Categories";
import Brands from "./pages/masters/Brands";
import Units from "./pages/masters/Units";
import Warehouses from "./pages/masters/Warehouses";
import Taxes from "./pages/masters/Taxes";
import Staff from "./pages/masters/Staff";

// Dealers
import Dealers from "./pages/dealers/Dealers";
import AddDealer from "./pages/dealers/AddDealer";
import DealerLedger from "./pages/dealers/DealerLedger";

// Clients
import AddClient from "./pages/clients/AddClient";
import ClientLedger from "./pages/clients/ClientLedger";

// Stock
import StockIn from "./pages/stock/StockIn";
import StockOut from "./pages/stock/StockOut";
import StockTransfer from "./pages/stock/StockTransfer";
import StockAdjustment from "./pages/stock/StockAdjustment";
import StockDamage from "./pages/stock/StockDamage";

// Purchases
import Purchases from "./pages/purchases/Purchases";
import CreatePurchase from "./pages/purchases/CreatePurchase";
import PurchaseReturn from "./pages/purchases/PurchaseReturn";

// Sales
import CreateSale from "./pages/sales/CreateSale";
import SalesReturn from "./pages/sales/SalesReturn";

// Payments
import ReceivePayment from "./pages/payments/ReceivePayment";
import PayPayment from "./pages/payments/PayPayment";
import Expenses from "./pages/payments/Expenses";

// Reports
import StockReport from "./pages/reports/StockReport";
import SalesReport from "./pages/reports/SalesReport";
import PurchaseReport from "./pages/reports/PurchaseReport";
import ProfitReport from "./pages/reports/ProfitReport";
import GSTReport from "./pages/reports/GSTReport";

// Settings
import CompanySettings from "./pages/settings/CompanySettings";
import InvoiceSettings from "./pages/settings/InvoiceSettings";
import RolesSettings from "./pages/settings/RolesSettings";
import BackupSettings from "./pages/settings/BackupSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} />

            {/* Masters */}
            <Route path="/masters/categories" element={<Categories />} />
            <Route path="/masters/brands" element={<Brands />} />
            <Route path="/masters/units" element={<Units />} />
            <Route path="/masters/warehouses" element={<Warehouses />} />
            <Route path="/masters/taxes" element={<Taxes />} />
            <Route path="/masters/staff" element={<Staff />} />

            {/* Products */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/add" element={<AddProduct />} />

            {/* Dealers */}
            <Route path="/dealers" element={<Dealers />} />
            <Route path="/dealers/add" element={<AddDealer />} />
            <Route path="/dealers/ledger" element={<DealerLedger />} />

            {/* Clients */}
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/add" element={<AddClient />} />
            <Route path="/clients/ledger" element={<ClientLedger />} />

            {/* Stock */}
            <Route path="/stock" element={<Stock />} />
            <Route path="/stock/in" element={<StockIn />} />
            <Route path="/stock/out" element={<StockOut />} />
            <Route path="/stock/transfer" element={<StockTransfer />} />
            <Route path="/stock/adjustment" element={<StockAdjustment />} />
            <Route path="/stock/damage" element={<StockDamage />} />

            {/* Purchases */}
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/purchases/create" element={<CreatePurchase />} />
            <Route path="/purchases/return" element={<PurchaseReturn />} />

            {/* Sales */}
            <Route path="/sales" element={<Sales />} />
            <Route path="/sales/create" element={<CreateSale />} />
            <Route path="/sales/return" element={<SalesReturn />} />

            {/* Payments */}
            <Route path="/payments/receive" element={<ReceivePayment />} />
            <Route path="/payments/pay" element={<PayPayment />} />
            <Route path="/payments/expenses" element={<Expenses />} />

            {/* Reports */}
            <Route path="/reports/stock" element={<StockReport />} />
            <Route path="/reports/sales" element={<SalesReport />} />
            <Route path="/reports/purchase" element={<PurchaseReport />} />
            <Route path="/reports/profit" element={<ProfitReport />} />
            <Route path="/reports/gst" element={<GSTReport />} />

            {/* Settings */}
            <Route path="/settings/company" element={<CompanySettings />} />
            <Route path="/settings/invoice" element={<InvoiceSettings />} />
            <Route path="/settings/roles" element={<RolesSettings />} />
            <Route path="/settings/backup" element={<BackupSettings />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
