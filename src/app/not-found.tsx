import Link from "next/link";
import { Home, SearchX } from "lucide-react";
import BackButton from "@/components/BackButton";

// Root 404 — renders inside the root layout (Navbar / Marquee / Footer).
// Triggered for unmatched URLs and whenever `notFound()` is thrown.
export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
            {/* Icon */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100">
                <SearchX size={40} strokeWidth={1.8} />
            </div>

            {/* ৪০৪ */}
            <p className="text-7xl font-extrabold tracking-tight text-red-600 sm:text-8xl">
                ৪০৪
            </p>

            <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                পেজটি খুঁজে পাওয়া যায়নি
            </h1>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                আপনি যে পেজটি খুঁজছেন সেটি সরিয়ে ফেলা হয়েছে, ঠিকানাটি ভুল হতে পারে
                অথবা এখনো তৈরি হয়নি।
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-95"
                >
                    <Home size={17} />
                    হোমে ফিরুন
                </Link>

                <BackButton />
            </div>
        </main>
    );
}
