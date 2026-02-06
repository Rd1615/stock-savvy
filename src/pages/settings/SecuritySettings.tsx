import { useState } from "react";
import { ShieldCheck, Smartphone, Key, Copy, Download, Eye, EyeOff, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const MOCK_RECOVERY_CODES = [
  "A1B2-C3D4-E5F6",
  "G7H8-I9J0-K1L2",
  "M3N4-O5P6-Q7R8",
  "S9T0-U1V2-W3X4",
  "Y5Z6-A7B8-C9D0",
  "E1F2-G3H4-I5J6",
  "K7L8-M9N0-O1P2",
  "Q3R4-S5T6-U7V8",
];

const SecuritySettings = () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [showSetup, setShowSetup] = useState(false);
  const [setupStep, setSetupStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [showRecoveryCodes, setShowRecoveryCodes] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleEnable2FA = () => {
    setShowSetup(true);
    setSetupStep(1);
  };

  const handleVerifySetup = () => {
    if (otp.length === 6) {
      setSetupStep(3);
      setIs2FAEnabled(true);
    }
  };

  const handleDisable2FA = () => {
    setIs2FAEnabled(false);
    setShowSetup(false);
    setSetupStep(1);
    setOtp("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Security Settings</h1>
        <p className="text-muted-foreground">Manage your account security and two-factor authentication</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 2FA Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-lg">Two-Factor Authentication (2FA)</CardTitle>
                  <CardDescription>Add an extra layer of security to your account</CardDescription>
                </div>
              </div>
              <Badge variant={is2FAEnabled ? "default" : "secondary"} className={is2FAEnabled ? "bg-success text-success-foreground" : ""}>
                {is2FAEnabled ? "Enabled" : "Disabled"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {!showSetup && !is2FAEnabled && (
              <div className="space-y-4">
                <div className="rounded-lg border border-border p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Smartphone className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Authenticator App</p>
                      <p className="text-sm text-muted-foreground">
                        Use an authenticator app like Google Authenticator, Authy, or Microsoft Authenticator to generate verification codes.
                      </p>
                    </div>
                  </div>
                </div>
                <Button onClick={handleEnable2FA} className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Enable 2FA
                </Button>
              </div>
            )}

            {showSetup && setupStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Step 1: Scan QR Code</h3>
                  <p className="text-sm text-muted-foreground">
                    Scan this QR code with your authenticator app
                  </p>
                  <div className="flex justify-center py-4">
                    <div className="h-48 w-48 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                      <div className="text-center">
                        <Smartphone className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                        <p className="text-xs text-muted-foreground">QR Code</p>
                        <p className="text-xs text-muted-foreground">will appear here</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Or enter this secret key manually:</p>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 bg-muted px-3 py-2 rounded-md text-sm font-mono tracking-wider">
                        JBSWY3DPEHPK3PXP
                      </code>
                      <Button variant="outline" size="icon">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <Button onClick={() => setSetupStep(2)} className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Next: Verify Code
                </Button>
              </div>
            )}

            {showSetup && setupStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Step 2: Verify Code</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter the 6-digit code from your authenticator app to confirm setup
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
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setSetupStep(1)}>Back</Button>
                  <Button
                    onClick={handleVerifySetup}
                    disabled={otp.length < 6}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Verify & Enable
                  </Button>
                </div>
              </div>
            )}

            {setupStep === 3 && is2FAEnabled && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Step 3: Save Recovery Codes</h3>
                  <p className="text-sm text-muted-foreground">
                    Save these recovery codes in a safe place. You can use them to access your account if you lose your authenticator device.
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {MOCK_RECOVERY_CODES.map((code) => (
                        <code key={code} className="text-sm font-mono bg-background px-3 py-1.5 rounded border text-center">
                          {code}
                        </code>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Copy className="h-3.5 w-3.5" />
                      Copy
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => setShowSetup(false)}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Done
                </Button>
              </div>
            )}

            {is2FAEnabled && !showSetup && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-success/5 border border-success/20">
                  <ShieldCheck className="h-5 w-5 text-success" />
                  <p className="text-sm">Two-factor authentication is active on your account.</p>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowRecoveryCodes(!showRecoveryCodes)}
                    className="gap-1"
                  >
                    <Key className="h-4 w-4" />
                    {showRecoveryCodes ? "Hide" : "View"} Recovery Codes
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-1 text-destructive hover:text-destructive"
                    onClick={handleDisable2FA}
                  >
                    Disable 2FA
                  </Button>
                </div>
                {showRecoveryCodes && (
                  <div className="bg-muted rounded-lg p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      {MOCK_RECOVERY_CODES.map((code) => (
                        <code key={code} className="text-sm font-mono bg-background px-3 py-1.5 rounded border text-center">
                          {code}
                        </code>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <RefreshCw className="h-3.5 w-3.5" />
                        Regenerate Codes
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Change Password */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Change Password</CardTitle>
            <CardDescription>Update your account password</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Current Password</Label>
              <div className="relative">
                <Input
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="Enter current password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>New Password</Label>
              <div className="relative">
                <Input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Confirm New Password</Label>
              <Input type="password" placeholder="Confirm new password" />
            </div>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Update Password
            </Button>
          </CardContent>
        </Card>

        {/* Active Sessions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Active Sessions</CardTitle>
            <CardDescription>Manage your active login sessions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { device: "Chrome on Windows", location: "Mumbai, India", current: true, time: "Now" },
              { device: "Safari on iPhone", location: "Mumbai, India", current: false, time: "2 hours ago" },
              { device: "Firefox on MacOS", location: "Pune, India", current: false, time: "1 day ago" },
            ].map((session, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                <div>
                  <p className="text-sm font-medium flex items-center gap-2">
                    {session.device}
                    {session.current && <Badge variant="secondary" className="text-xs">Current</Badge>}
                  </p>
                  <p className="text-xs text-muted-foreground">{session.location} • {session.time}</p>
                </div>
                {!session.current && (
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive text-xs">
                    Revoke
                  </Button>
                )}
              </div>
            ))}
            <Button variant="outline" className="w-full text-destructive hover:text-destructive">
              Revoke All Other Sessions
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SecuritySettings;
