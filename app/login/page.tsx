"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../lib/firebase";
import PublicHeader from "../../components/PublicHeader";

export default function LoginPage() {

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <PublicHeader />

      <div className="flex items-center justify-center h-[80vh]">

        <button
          onClick={login}
          className="bg-purple-600 px-6 py-3 rounded-lg"
        >
          Login with Google
        </button>

      </div>

    </div>
  );
}
