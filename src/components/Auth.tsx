"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { UserRound, LogOut, LogIn, UserPlus } from "lucide-react";

const AuthSSS = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="flex items-center gap-3">
      {user ? (
        <div className="flex items-center gap-3">
          {/* User Welcome */}
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white">
              <UserRound size={18} />
            </div>

            <div className="max-w-32">
              <p className="text-xs text-gray-500">স্বাগতম</p>
              <h2 className="truncate text-sm font-bold text-gray-900">
                {user.name || "User"}
              </h2>
            </div>
          </div>

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 rounded-lg border border-red-600 bg-white px-3 py-2 text-sm font-semibold text-red-600 transition-all duration-200 hover:bg-red-600 hover:text-white active:scale-95"
          >
            <LogOut size={17} />
            <span>সাইন আউট</span>
          </button>
        </div>
      ) : (
        <>
          {/* Sign In */}
          <Link
            href="/signin"
            className="flex items-center gap-2 rounded-lg border border-red-600 bg-white px-4 py-2 text-sm font-semibold text-red-600 transition-all duration-200 hover:bg-red-50 active:scale-95"
          >
            <LogIn size={17} />
            <span>সাইন ইন</span>
          </Link>

          {/* Sign Up */}
          <Link
            href="/signup"
            className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 active:scale-95"
          >
            <UserPlus size={17} />
            <span>সাইন আপ</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthSSS;