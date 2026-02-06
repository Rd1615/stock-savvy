import { Link } from "react-router-dom";
import { Clock, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SessionExpired = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-warning/10 flex items-center justify-center">
            <Clock className="h-7 w-7 text-warning" />
          </div>
          <CardTitle className="text-2xl">Session Expired</CardTitle>
          <CardDescription>
            Your session has expired for security reasons. Please log in again to continue.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-border bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground">
              Sessions automatically expire after a period of inactivity to protect your account. 
              Your unsaved work may have been lost.
            </p>
          </div>

          <div className="space-y-3">
            <Link to="/auth/owner/login" className="block">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                <LogIn className="h-4 w-4" />
                Owner Login
              </Button>
            </Link>
            <Link to="/auth/staff/login" className="block">
              <Button variant="outline" className="w-full gap-2">
                <LogIn className="h-4 w-4" />
                Staff Login
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SessionExpired;
