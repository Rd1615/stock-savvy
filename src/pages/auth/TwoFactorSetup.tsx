import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Smartphone, Copy, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Badge } from "@/components/ui/badge";

const MOCK_SECRET = "JBSWY3DPEHPK3PXP";

const TwoFactorSetup = () => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [copied, setCopied] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(MOCK_SECRET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVerify = () => {
    if (otp.length === 6) {
      setIsVerifying(true);
      // API call: POST /api/auth/2fa/setup/verify { token: otp }
      setTimeout(() => {
        setIsVerifying(false);
        setStep(3);
      }, 1500);
    }
  };

  const recoveryCodes = [
    "A1B2-C3D4-E5F6", "G7H8-I9J0-K1L2",
    "M3N4-O5P6-Q7R8", "S9T0-U1V2-W3X4",
    "Y5Z6-A7B8-C9D0", "E1F2-G3H4-I5J6",
    "K7L8-M9N0-O1P2", "Q3R4-S5T6-U7V8",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center">
            <ShieldCheck className="h-7 w-7 text-accent" />
          </div>
          <CardTitle className="text-2xl">Set Up Two-Factor Authentication</CardTitle>
          <CardDescription>
            Secure your account with an authenticator app
          </CardDescription>
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    step >= s
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > s ? <Check className="h-4 w-4" /> : s}
                </div>
                {s < 3 && (
                  <div className={`w-8 h-0.5 ${step > s ? "bg-accent" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 text-xs text-muted-foreground pt-1">
            <span>Scan QR</span>
            <span>Verify</span>
            <span>Backup</span>
          </div>
        </CardHeader>

        <CardContent>
          {/* Step 1: QR Code */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground text-center">
                  Scan the QR code below using your authenticator app
                  (Google Authenticator, Authy, or Microsoft Authenticator)
                </p>
                <div className="flex justify-center py-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border">
                    {/* Simulated QR code pattern */}
                    <div className="h-48 w-48 relative">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        {/* QR code simulation */}
                        <rect width="200" height="200" fill="white" />
                        {/* Position markers */}
                        <rect x="10" y="10" width="50" height="50" fill="black" />
                        <rect x="15" y="15" width="40" height="40" fill="white" />
                        <rect x="20" y="20" width="30" height="30" fill="black" />
                        <rect x="140" y="10" width="50" height="50" fill="black" />
                        <rect x="145" y="15" width="40" height="40" fill="white" />
                        <rect x="150" y="20" width="30" height="30" fill="black" />
                        <rect x="10" y="140" width="50" height="50" fill="black" />
                        <rect x="15" y="145" width="40" height="40" fill="white" />
                        <rect x="20" y="150" width="30" height="30" fill="black" />
                        {/* Data modules */}
                        {Array.from({ length: 15 }, (_, i) =>
                          Array.from({ length: 15 }, (_, j) => {
                            const x = 70 + j * 8;
                            const y = 70 + i * 8;
                            const show = (i * 7 + j * 13 + i * j) % 3 !== 0;
                            return show ? (
                              <rect key={`${i}-${j}`} x={x} y={y} width="6" height="6" fill="black" />
                            ) : null;
                          })
                        )}
                        {/* More pattern blocks */}
                        {Array.from({ length: 8 }, (_, i) => (
                          <rect key={`h-${i}`} x={70 + i * 10} y="30" width="6" height="6" fill="black" />
                        ))}
                        {Array.from({ length: 8 }, (_, i) => (
                          <rect key={`v-${i}`} x="30" y={70 + i * 10} width="6" height="6" fill="black" />
                        ))}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Can't scan? Enter this key manually:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 bg-muted px-4 py-2.5 rounded-lg text-sm font-mono tracking-widest text-center">
                    {MOCK_SECRET}
                  </code>
                  <Button variant="outline" size="icon" onClick={handleCopy}>
                    {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Account: owner@stockpro.com</p>
              </div>

              <div className="flex justify-between">
                <Link to="/settings/security">
                  <Button variant="outline" className="gap-1">
                    <ArrowLeft className="h-4 w-4" /> Cancel
                  </Button>
                </Link>
                <Button onClick={() => setStep(2)} className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1">
                  Next <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Verify OTP */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-3 text-center">
                <Smartphone className="h-12 w-12 mx-auto text-accent" />
                <p className="text-sm text-muted-foreground">
                  Enter the 6-digit verification code from your authenticator app
                </p>
                <div className="flex justify-center py-4">
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
                <p className="text-xs text-muted-foreground">
                  Code refreshes every 30 seconds
                </p>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)} className="gap-1">
                  <ArrowLeft className="h-4 w-4" /> Back
                </Button>
                <Button
                  onClick={handleVerify}
                  disabled={otp.length < 6 || isVerifying}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {isVerifying ? "Verifying..." : "Verify & Activate"}
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Recovery Codes */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-success">
                  <Check className="h-5 w-5" />
                  <span className="font-semibold">2FA Enabled Successfully!</span>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Save these recovery codes securely. Each code can only be used once.
                </p>
                <div className="bg-muted rounded-lg p-4 border border-border">
                  <div className="grid grid-cols-2 gap-2">
                    {recoveryCodes.map((code) => (
                      <code key={code} className="text-sm font-mono bg-background px-3 py-2 rounded border text-center">
                        {code}
                      </code>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 justify-center">
                  <Button variant="outline" size="sm" className="gap-1" onClick={() => navigator.clipboard.writeText(recoveryCodes.join("\n"))}>
                    <Copy className="h-3.5 w-3.5" /> Copy All
                  </Button>
                </div>
                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3">
                  <p className="text-xs text-destructive font-medium">
                    ⚠️ Warning: These codes won't be shown again. Store them somewhere safe!
                  </p>
                </div>
              </div>
              <Link to="/settings/security" className="block">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Done — Go to Security Settings
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TwoFactorSetup;
