// Visual-only skeletons shared by the route-level `loading.tsx` files.
// Each shape mirrors its real component (NewsCard / MainNews / MostRead) so the
// content swap-in looks seamless. No data, no interactivity.

const pulse = "animate-pulse bg-gray-200";

export function NewsCardSkeleton() {
    return (
        <div className="w-[250px] rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
            <div className={`${pulse} mb-3 h-36 rounded-lg`} />
            <div className={`${pulse} mb-2 h-3 w-1/3 rounded`} />
            <div className={`${pulse} mb-2 h-4 w-full rounded`} />
            <div className={`${pulse} h-4 w-3/4 rounded`} />
        </div>
    );
}

export function FeaturedSkeleton() {
    return (
        <div className="flex gap-10">
            {/* lead story card */}
            <div className="w-96 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
                <div className={`${pulse} mb-3 h-56 rounded-lg`} />
                <div className={`${pulse} mb-2 h-3 w-1/3 rounded`} />
                <div className={`${pulse} mb-2 h-5 w-full rounded`} />
                <div className={`${pulse} h-4 w-2/3 rounded`} />
            </div>

            {/* side list of headlines */}
            <div className="grid gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="w-96 rounded-xl border border-gray-200 bg-white px-4 py-5 shadow-sm"
                    >
                        <div className={`${pulse} mb-2 h-3 w-1/4 rounded`} />
                        <div className={`${pulse} h-4 w-3/4 rounded`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export function SectionHeadingSkeleton() {
    return (
        <div className="border-b-2 border-red-700 pb-2">
            <div className={`${pulse} h-6 w-52 rounded`} />
        </div>
    );
}

export function MostReadSkeleton() {
    return (
        <div className="rounded-xl border border-gray-300 bg-white p-2 shadow-sm">
            <div className={`${pulse} mb-2 h-5 w-32 rounded`} />
            <div className="mt-5 grid gap-5">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-5">
                        <div className={`${pulse} h-5 w-5 rounded`} />
                        <div className={`${pulse} h-4 flex-1 rounded`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export function ArticleSkeleton() {
    return (
        <main className="min-h-screen bg-gray-50">
            <article className="mx-auto max-w-4xl px-4 py-10">
                <div className={`${pulse} mb-3 h-4 w-24 rounded`} />

                <div className="mb-6 space-y-3">
                    <div className={`${pulse} h-9 w-5/6 rounded-lg`} />
                    <div className={`${pulse} h-9 w-2/3 rounded-lg`} />
                </div>

                <div className={`${pulse} mb-8 h-4 w-48 rounded`} />

                <div className={`${pulse} mb-8 h-80 w-full rounded-xl`} />

                <div className="space-y-4 rounded-xl bg-white p-6 shadow-sm md:p-10">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className={`${pulse} h-4 rounded ${
                                i % 3 === 2 ? "w-5/6" : "w-full"
                            }`}
                        />
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className={`${pulse} h-8 w-24 rounded-full`} />
                    ))}
                </div>
            </article>
        </main>
    );
}
