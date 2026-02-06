import { Link } from "react-router-dom";
import { Lock, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AccountLocked = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
            <Lock className="h-7 w-7 text-destructive" />
          </div>
          <CardTitle className="text-2xl">Account Locked</CardTitle>
          <CardDescription>
            Your account has been temporarily locked due to multiple failed login attempts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 space-y-2">
            <p className="text-sm font-medium text-destructive">Security Alert</p>
            <p className="text-sm text-muted-foreground">
              We detected 5 consecutive failed login attempts. For your safety, 
              your account has been locked for 30 minutes.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">What you can do:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs font-medium shrink-0">1</span>
                Wait 30 minutes and try again
              </li>
              <li className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs font-medium shrink-0">2</span>
                Reset your password if you've forgotten it
              </li>
              <li className="flex items-start gap-2">
                <span className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs font-medium shrink-0">3</span>
                Contact support if you didn't make these attempts
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <Link to="/auth/forgot-password" className="block">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                <Mail className="h-4 w-4" />
                Reset Password
              </Button>
            </Link>
            <Link to="/auth/owner/login" className="block">
              <Button variant="outline" className="w-full gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Login
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountLocked;
