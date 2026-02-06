import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const TwoFactorVerify = () => {
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    // API call: POST /api/auth/2fa/verify { token: otp }
    setTimeout(() => setIsVerifying(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center">
            <ShieldCheck className="h-7 w-7 text-accent" />
          </div>
          <CardTitle className="text-2xl">Two-Factor Authentication</CardTitle>
          <CardDescription>
            Enter the 6-digit code from your authenticator app
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="flex justify-center">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <div className="mx-2" />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={otp.length < 6 || isVerifying}
            >
              {isVerifying ? "Verifying..." : "Verify Code"}
            </Button>
          </form>

          <div className="mt-6 text-center space-y-3">
            <Link
              to="/auth/2fa/recovery"
              className="text-sm text-accent hover:underline block"
            >
              Lost your authenticator? Use recovery code
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

export default TwoFactorVerify;
