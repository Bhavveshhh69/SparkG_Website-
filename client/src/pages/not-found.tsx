import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import boltLogo from "@/assets/sparkg-bolt.png";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex items-center justify-center mb-6">
            <Link href="/">
              <img src={boltLogo} alt="SparkG Logo" className="h-12 w-12" />
            </Link>
          </div>
          
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-foreground">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Did you forget to add the page to the router?
          </p>
          
          <div className="mt-6 text-center">
            <Link href="/" className="text-primary hover:underline">
              Return to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}