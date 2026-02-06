import { useState } from "react";
import { Link } from "react-router-dom";
import { KeyRound, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TwoFactorRecovery = () => {
  const [recoveryCode, setRecoveryCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleRecover = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    // API call: POST /api/auth/2fa/recover { recoveryCode }
    setTimeout(() => setIsVerifying(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-warning/10 flex items-center justify-center">
            <KeyRound className="h-7 w-7 text-warning" />
          </div>
          <CardTitle className="text-2xl">Recovery Code</CardTitle>
          <CardDescription>
            Enter one of your recovery codes to regain access to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRecover} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recovery">Recovery Code</Label>
              <Input
                id="recovery"
                placeholder="XXXX-XXXX-XXXX"
                value={recoveryCode}
                onChange={(e) => setRecoveryCode(e.target.value)}
                className="text-center font-mono tracking-widest text-lg"
              />
              <p className="text-xs text-muted-foreground">
                Recovery codes were provided when you enabled 2FA. Each code can only be used once.
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={!recoveryCode.trim() || isVerifying}
            >
              {isVerifying ? "Verifying..." : "Recover Account"}
            </Button>
          </form>

          <div className="mt-6 text-center space-y-3">
            <Link
              to="/auth/2fa/verify"
              className="text-sm text-accent hover:underline block"
            >
              Have your authenticator? Enter code instead
            </Link>
            <Link
              to="/auth/owner/login"
              className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TwoFactorRecovery;
