"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "@/auth";

export default function SignUpPage() {
  const router = useRouter();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    headline: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, email, password, location, headline } = formData;

    if (!firstName || !lastName || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);

      // In a real application, you would call an API to register the user
      // For this demo, we'll simulate a successful registration and then redirect to sign-in
      setTimeout(() => {
        toast({
          title: "Account created",
          description: "Your account has been created successfully. Please sign in.",
        });

        // In a real app, we'd redirect to sign in or directly sign the user in
        router.push("/auth/signin");
      }, 1500);

    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "An error occurred",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast({
        title: "An error occurred",
        description: "Please try again later",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="w-full max-w-md mx-auto space-y-6 p-4">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
              <span className="font-bold">C</span>
            </div>
            <span className="text-xl font-bold text-primary">ConnectMe</span>
          </Link>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
            <CardDescription className="text-center">
              Enter your information to create your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name*</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name*</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password*</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={loading}
                />
                <p className="text-xs text-muted-foreground">
                  Password must be at least 8 characters long and include a number and special character
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="headline">Headline</Label>
                <Input
                  id="headline"
                  placeholder="e.g., Software Engineer at Company"
                  value={formData.headline}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              <div className="text-xs text-muted-foreground">
                By clicking "Join ConnectMe", you agree to our <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                type="submit"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Join ConnectMe"}
              </Button>

              <Separator className="my-2" />

              <Button
                variant="outline"
                className="w-full"
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.48 10.92v3.28h4.92c-.2 1.14-.82 2.1-1.74 2.74l2.81 2.18A9.86 9.86 0 0 0 21 12.46c0-.68-.06-1.34-.17-1.96h-8.35z" fill="#4285F4" />
                  <path d="M5.3 14.49l-2.26 1.74A9.84 9.84 0 0 0 12 23c2.7 0 4.96-.89 6.61-2.42l-2.81-2.18c-.76.53-1.75.84-2.8.84-2.15 0-3.98-1.45-4.63-3.41H5.3z" fill="#34A853" />
                  <path d="M10.37 8.41c-.23-.72-.35-1.48-.35-2.27 0-.79.13-1.54.35-2.27l-2.61-2.02A9.82 9.82 0 0 0 5.8 8.73h4.57z" fill="#FBBC05" />
                  <path d="M12 4.8c1.19 0 2.27.41 3.12 1.21l2.48-2.48A9.83 9.83 0 0 0 12 0C7.8 0 4.12 2.42 2.18 5.87l2.61 2.02c.65-1.92 2.48-3.09 4.63-3.09z" fill="#EA4335" />
                </svg>
                Sign up with Google
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
