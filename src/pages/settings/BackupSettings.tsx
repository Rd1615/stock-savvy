import { Download, Upload, Database, Calendar, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const backupHistory = [
  { id: 1, date: "2024-01-15 14:30", size: "125 MB", status: "success" },
  { id: 2, date: "2024-01-14 14:30", size: "124 MB", status: "success" },
  { id: 3, date: "2024-01-13 14:30", size: "123 MB", status: "success" },
  { id: 4, date: "2024-01-12 14:30", size: "122 MB", status: "failed" },
  { id: 5, date: "2024-01-11 14:30", size: "121 MB", status: "success" },
];

const BackupSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Database Backup</h1>
        <p className="text-muted-foreground">Manage data backups and restoration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-accent" />
              Create Backup
            </CardTitle>
            <CardDescription>Download a copy of your data</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Create a complete backup of all your data including products, invoices, clients, and settings.
            </p>
            <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Download className="h-4 w-4" />
              Download Backup
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-info" />
              Restore Backup
            </CardTitle>
            <CardDescription>Restore from a backup file</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Upload a previously downloaded backup file to restore your data.
            </p>
            <Button variant="outline" className="w-full gap-2">
              <Upload className="h-4 w-4" />
              Upload Backup File
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-success" />
              Auto Backup
            </CardTitle>
            <CardDescription>Scheduled automatic backups</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <Badge className="status-badge status-paid">Active</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Frequency</span>
                <span>Daily at 2:30 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last Backup</span>
                <span>Today, 2:30 PM</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Backup History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {backupHistory.map((backup) => (
              <div
                key={backup.id}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-medium">{backup.date}</p>
                    <p className="text-sm text-muted-foreground">{backup.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    className={
                      backup.status === "success"
                        ? "status-badge status-paid"
                        : "status-badge status-unpaid"
                    }
                  >
                    {backup.status}
                  </Badge>
                  {backup.status === "success" && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-3 w-3" />
                      Download
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-warning/50 bg-warning/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
            <div>
              <p className="font-medium">Important</p>
              <p className="text-sm text-muted-foreground">
                Regular backups protect your business data. We recommend downloading a backup at least weekly
                and storing it in a secure location.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BackupSettings;
