import { useState } from "react";
import { Link } from "react-router-dom";
import { KeyRound, Eye, EyeOff, ArrowLeft, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const requirements = [
    { label: "At least 8 characters", met: newPassword.length >= 8 },
    { label: "One uppercase letter", met: /[A-Z]/.test(newPassword) },
    { label: "One lowercase letter", met: /[a-z]/.test(newPassword) },
    { label: "One number", met: /\d/.test(newPassword) },
    { label: "One special character", met: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword) },
  ];

  const passwordsMatch = newPassword === confirmPassword && confirmPassword.length > 0;
  const allMet = requirements.every((r) => r.met);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!allMet || !passwordsMatch) return;
    setIsSubmitting(true);
    // API call: POST /api/auth/change-password
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center">
            <KeyRound className="h-7 w-7 text-accent" />
          </div>
          <CardTitle className="text-2xl">Change Password</CardTitle>
          <CardDescription>Update your account password for security</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current">Current Password</Label>
              <div className="relative">
                <Input id="current" type={showCurrent ? "text" : "password"} placeholder="Enter current password" />
                <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3" onClick={() => setShowCurrent(!showCurrent)}>
                  {showCurrent ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="new">New Password</Label>
              <div className="relative">
                <Input id="new" type={showNew ? "text" : "password"} placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3" onClick={() => setShowNew(!showNew)}>
                  {showNew ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm New Password</Label>
              <div className="relative">
                <Input id="confirm" type={showConfirm ? "text" : "password"} placeholder="Confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-full px-3" onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {confirmPassword && !passwordsMatch && (
                <p className="text-xs text-destructive">Passwords do not match</p>
              )}
            </div>

            {/* Password requirements */}
            {newPassword && (
              <div className="rounded-lg border border-border p-3 space-y-1.5">
                <p className="text-xs font-medium text-muted-foreground">Password requirements:</p>
                {requirements.map((req) => (
                  <div key={req.label} className="flex items-center gap-2 text-xs">
                    {req.met ? (
                      <Check className="h-3 w-3 text-success" />
                    ) : (
                      <X className="h-3 w-3 text-muted-foreground" />
                    )}
                    <span className={req.met ? "text-success" : "text-muted-foreground"}>
                      {req.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={!allMet || !passwordsMatch || isSubmitting}>
              {isSubmitting ? "Updating..." : "Update Password"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <Link to="/settings/security" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
              <ArrowLeft className="h-3 w-3" /> Back to Security Settings
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChangePassword;
