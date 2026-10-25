
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Newspaper,
  UserPlus,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignupPage = () => {
const router = useRouter();

      const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");







  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const info = new FormData(form);

    if (info.get("password") !== info.get("confirmPassword")) {
      setError("দুটি পাসওয়ার্ড মিলছে না। আবার চেষ্টা করুন।");
      return;
    }

    setError("");
    // Connect Better Auth here later.








    const { data, error } = await authClient.signUp.email(
  {
    name: name,
    email: email,
    password: password,
    callbackURL: "/signin",
  },
  {
    onRequest: (ctx) => {
      console.log("Sign-up request initiated", ctx);
    },

    onSuccess: (ctx) => {
      console.log("Sign-up successful", ctx);
      router.push("/signin");
      // Redirect to dashboard after successful signup
    },

    onError: (ctx) => {
      console.log("Sign-up error", ctx);
      alert(ctx.error.message);
    },
  }
);



console.log(data);







  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-white">
              <Newspaper size={25} />
            </span>

            <span>
              <span className="block text-2xl font-extrabold text-red-600">
                বাংলা নিউজ{" "}
                <span className="rounded bg-red-600 px-1 text-white">
                  ২৪
                </span>
              </span>
              <span className="text-xs text-slate-500">
                সত্যের সাথে, সবসময়
              </span>
            </span>
          </Link>

          <div className="text-sm text-slate-600">
            <span className="hidden sm:inline">অ্যাকাউন্ট আছে? </span>
            <Link
              href="/signin"
              className="font-bold text-red-600 transition hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
            >
              সাইন ইন করুন
              <ArrowRight className="ml-1 inline" size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* Signup Form */}
      <section className="flex min-h-[calc(100vh-85px)] items-center justify-center bg-gradient-to-br from-red-50/60 via-white to-white px-4 py-10 sm:px-6">
        <div className="w-full max-w-xl rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-10">
          {/* Title */}
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100">
              <UserPlus size={29} />
            </div>

            <h1 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">
              নতুন অ্যাকাউন্ট তৈরি করুন
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
              আপনার তথ্য দিয়ে নিবন্ধন করুন এবং বাংলা নিউজ ২৪-এর সাথে যুক্ত হোন।
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-bold"
              >
                নাম <span className="text-red-600">*</span>
              </label>

              <div className="relative">
                <UserRound
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
            onChange={(e) => setName(e.target.value)}
                  placeholder="আপনার নাম লিখুন"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold"
              >
                ইমেইল <span className="text-red-600">*</span>
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                   value={email}
            onChange={(e) => setEmail(e.target.value)}
                  placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-bold"
              >
                পাসওয়ার্ড <span className="text-red-600">*</span>
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="password"
                  name="password"
                   value={password}
            onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড দিন"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3.5 pl-12 pr-12 text-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={
                    showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-red-600"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-bold"
              >
                পাসওয়ার্ড নিশ্চিত করুন{" "}
                <span className="text-red-600">*</span>
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="পাসওয়ার্ড আবার লিখুন"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3.5 pl-12 pr-12 text-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((prev) => !prev)
                  }
                  aria-label={
                    showConfirmPassword
                      ? "পাসওয়ার্ড লুকান"
                      : "পাসওয়ার্ড দেখুন"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-red-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <p
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
            >
              অ্যাকাউন্ট তৈরি করুন

              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-sm text-slate-400">অথবা</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Google Signup UI */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <span className="text-xl font-extrabold text-blue-600">G</span>
            Google দিয়ে সাইন আপ করুন
          </button>

          {/* Terms */}
          <p className="mt-7 text-center text-xs leading-6 text-slate-500">
            অ্যাকাউন্ট তৈরি করে আপনি আমাদের{" "}
            <Link
              href="/terms"
              className="font-semibold text-red-600 hover:underline"
            >
              ব্যবহারের শর্তাবলি
            </Link>{" "}
            ও{" "}
            <Link
              href="/privacy"
              className="font-semibold text-red-600 hover:underline"
            >
              গোপনীয়তা নীতি
            </Link>{" "}
            মেনে নিচ্ছেন।
          </p>

          {/* Sign In Link */}
          <p className="mt-6 border-t border-slate-100 pt-5 text-center text-sm text-slate-600">
            ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="font-bold text-red-600 hover:text-red-700 hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
