"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);

      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

      router.push("/dashboard");

    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center">

      <div className="bg-gray-900 p-10 rounded-xl border border-gray-800 text-center">

        <h1 className="text-3xl font-bold mb-6">
          Login to LegalFormat
        </h1>

        <p className="text-gray-400 mb-8">
          Sign in to save and manage your legal documents.
        </p>

        <button
          onClick={login}
          className="bg-purple-600 px-6 py-3 rounded-lg w-full"
        >
          {loading ? "Signing in..." : "Login with Google"}
        </button>

      </div>

    </main>
  );
}
