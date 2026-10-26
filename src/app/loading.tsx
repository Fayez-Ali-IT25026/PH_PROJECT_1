import {
    FeaturedSkeleton,
    MostReadSkeleton,
    NewsCardSkeleton,
    SectionHeadingSkeleton,
} from "@/components/skeletons";

// Mirrors the home page layout: 2/3 content + 1/3 "সর্বাধিক পঠিত" sidebar.
export default function Loading() {
    return (
        <div role="status" aria-busy="true" className="mt-3 grid grid-cols-3 gap-20">
            <p className="sr-only">সংবাদ লোড হচ্ছে…</p>

            <div className="col-span-2">
                <FeaturedSkeleton />

                <div className="mt-5 grid gap-5">
                    {Array.from({ length: 2 }).map((_, section) => (
                        <div key={section}>
                            <SectionHeadingSkeleton />
                            <div className="mt-5 grid grid-cols-3 gap-20">
                                {Array.from({ length: 3 }).map((_, card) => (
                                    <NewsCardSkeleton key={card} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="col-span-1">
                <MostReadSkeleton />
            </div>
        </div>
    );
}
