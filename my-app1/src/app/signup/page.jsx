"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth} from "../firebase/config"; // Adjust the path as needed
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignUP() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up: ", userCredential.user);

      // Show alert box and redirect after 5 seconds
      alert("User registered successfully!");
      setTimeout(() => {
        router.push("/playground");
      }, 5000);
    } catch (err) {
      setError(err.message);
      console.error("Error signing up: ", err);
    }
  };
  

  // const handleGoogleSignIn = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, googleProvider);
  //     const user = result.user;
  //     console.log("User signed in with Google: ", user);

  //     // Redirect to the editor page
  //     router.push("/editor");
  //   } catch (error) {
  //     setError(error.message);
  //     console.error("Error signing in with Google: ", error);

  //     // Provide more user-friendly feedback
  //     alert("There was an error signing in with Google. Please try again.");
  //   }
  // };

  // const handleGoogleSignIn = async () => {
  //   const router = useRouter(); // Initialize router if using Next.js
  //   const [error, setError] = useState(''); // Initialize state for error handling
  
  //   try {
  //     const result = await signInWithPopup(auth, googleProvider);
  //     const user = result.user;
  
  //     if (user) {
  //       console.log('User signed in with Google:', user);
  
  //       // Redirect to the editor page
  //       router.push('/editor');
  //     } else {
  //       console.error('No user object returned from Google sign-in');
  //       alert('Sign-in failed. Please try again.');
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //     console.error('Error signing in with Google:', error);
  
  //     // Provide more user-friendly feedback
  //     alert('There was an error signing in with Google. Please try again.');
  //   }
  // };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp}>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    placeholder="Max"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    placeholder="Robinson"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
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
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                type="submit"
                className="w-full"
              >
                Create an account
              </Button>
            </div>
          </form>
         
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUP;
