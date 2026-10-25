
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  Newspaper,
  ArrowRight,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

const SigninPage = () => {
  const router = useRouter();

   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        setError(error.message || "সাইন ইন করা যায়নি। আবার চেষ্টা করুন।");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    setError("");

    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        setError(error.message || "Google দিয়ে সাইন ইন করা যায়নি।");
      }
    } catch {
      setError("Google সাইন ইন করতে সমস্যা হয়েছে।");
    }




const { data, error } = await authClient.signIn.email({
    email: email,
    password: password,
    rememberMe: true,
    callbackURL: "/"
})



console.log(data)




  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-2"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">
            <Newspaper size={27} />
          </div>

          <span className="text-2xl font-extrabold text-gray-900">
            বাংলা নিউজ <span className="text-red-600">২৪</span>
          </span>
        </Link>

        {/* Sign-in Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
          <div className="mb-7 text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              আবার ফিরে আসুন
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              আপনার অ্যাকাউন্টে সাইন ইন করুন
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                ইমেইল ঠিকানা
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
            onChange={(e) => setEmail(e.target.value)}
                  placeholder="আপনার ইমেইল লিখুন"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  পাসওয়ার্ড
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-red-600 hover:text-red-700"
                >
                  পাসওয়ার্ড ভুলে গেছেন?
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                    value={password}
            onChange={(e) => setPassword(e.target.value)}
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-12 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন করুন"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-400">অথবা</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Google Sign-in */}
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            <svg
              viewBox="0 0 48 48"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 3.05 13.22l7.98 6.19C12.94 13.72 18.01 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.75 7.18l7.73 6C44.42 37.96 46.98 31.81 46.98 24.55z"
              />
              <path
                fill="#FBBC05"
                d="M10.03 28.59A14.4 14.4 0 0 1 9.25 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.57 10.78l7.46-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-5.99 0-11.06-4.22-12.97-9.91l-7.98 6.19C6.51 43.62 14.62 48 24 48z"
              />
            </svg>
            Google দিয়ে সাইন ইন
          </button>

          {/* Sign-up Link */}
          <p className="mt-7 text-center text-sm text-gray-600">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/signup"
              className="font-bold text-red-600 hover:text-red-700"
            >
              নতুন অ্যাকাউন্ট তৈরি করুন
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} বাংলা নিউজ ২৪। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </main>
  );
};

export default SigninPage;
