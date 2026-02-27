"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import PublicHeader from "@/components/PublicHeader";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/dashboard");
  };

  return (
    <>
      <PublicHeader />

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[420px] bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Welcome Back
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border rounded-xl"
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border rounded-xl"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
