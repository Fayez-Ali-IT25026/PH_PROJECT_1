import { ArticleSkeleton } from "@/components/skeletons";

// Mirrors the article page (source → title → meta → hero image → body → tags).
export default function Loading() {
    return (
        <div role="status" aria-busy="true">
            <p className="sr-only">সংবাদ পড়া হচ্ছে…</p>
            <ArticleSkeleton />
        </div>
    );
}
