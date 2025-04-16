"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { authAPI } from "@/lib/api-service"; 
import { AxiosError } from "axios";


export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('http://127.0.0.1:8000/api/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Server response (non-JSON):', text);
        throw new Error('Server returned non-JSON response');
      }

      const data = await response.json();
      console.log('Login response:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      if (data.token) {
        localStorage.setItem('access_token', data.token);
        toast({
          title: "Success",
          description: "Signed in successfully",
        });
        router.push("/dashboard");
      }
    } catch (error: any) {
      console.error("Authentication error:", error);
      toast({
        title: "Authentication failed",
        description: error.message || "Invalid email or password",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      // This will trigger the server-side Google auth flow
      window.location.href = `/api/auth/signin/google?callbackUrl=${encodeURIComponent(callbackUrl)}`;
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

  // UI remains exactly the same as your original
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="w-full max-w-md mx-auto space-y-6 p-4">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
              <span className="font-bold">P</span>
            </div>
            <span className="text-xl font-bold text-primary">ProNetwork</span>
          </Link>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/auth/forgot-password" className="text-xs text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                <label htmlFor="remember" className="text-sm text-muted-foreground">
                  Remember me
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
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
                Sign in with Google
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>

        {/* For demo purposes */}
        <div className="text-center text-xs text-muted-foreground border-t pt-4">
          <p>Demo credentials:</p>
          <p>Email: jane@example.com</p>
          <p>Password: password123</p>
        </div>
      </div>
    </div>
  );
}