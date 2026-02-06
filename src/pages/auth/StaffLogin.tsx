import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StaffLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-info/20 flex items-center justify-center">
            <User className="h-6 w-6 text-info" />
          </div>
          <CardTitle className="text-2xl">Staff Login</CardTitle>
          <CardDescription>Sign in to access your work dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="staff@company.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full bg-info text-info-foreground hover:bg-info/90">
              Sign In
            </Button>
          </form>
          <div className="mt-4 text-right">
            <Link to="/auth/forgot-password" className="text-sm text-accent hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Are you an owner? <Link to="/auth/owner/login" className="text-accent hover:underline">Login here</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffLogin;
