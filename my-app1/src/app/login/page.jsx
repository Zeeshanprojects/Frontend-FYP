"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebase/config"; // Adjust the path as needed
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in: ", userCredential.user);

      if (userCredential.user) {
        // Save response to local storage
        localStorage.setItem("user", JSON.stringify(userCredential.user));
        router.push("/playground");
      }
    } catch (err) {
      setError("You don't have an account. Redirecting to signup...");
      alert("You don't have an account. Redirecting to signup...");
      console.error("Error logging in: ", err);
      setTimeout(() => {
        router.push("/signup");
      }, 2000); // Delay the redirect to give the user time to see the alert
    }
  };

  return (
    <>
      <div className="mylogodv">
        <Link href="/">
          <Image
            src="/logo.png" // Replace with your image path
            alt="Sign in"
            width={100} // Adjust the width as needed
            height={100} // Adjust the height as needed
          />
        </Link>
      </div>
      <div className="flex items-center justify-center min-h-screen  mt-20"> {/* Adjusted margin-top */}
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="#"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default LoginForm;
