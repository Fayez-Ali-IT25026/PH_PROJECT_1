import { NewsCardSkeleton } from "@/components/skeletons";

// Mirrors the category page: heading + 3-column card grid.
export default function Loading() {
    return (
        <div role="status" aria-busy="true" className="mt-5">
            <p className="sr-only">বিভাগের সংবাদ লোড হচ্ছে…</p>

            <div className="mt-5 border-b-4 border-red-800 pb-3">
                <div className="h-8 w-64 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <NewsCardSkeleton key={i} />
                ))}
            </div>
        </div>
    );
}
