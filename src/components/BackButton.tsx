"use client";

import { ArrowLeft } from "lucide-react";

// Client-only: `history.back()` needs the browser.
const BackButton = () => {
    return (
        <button
            type="button"
            onClick={() => history.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-95"
        >
            <ArrowLeft size={17} />
            আগের পেজ
        </button>
    );
};

export default BackButton;
