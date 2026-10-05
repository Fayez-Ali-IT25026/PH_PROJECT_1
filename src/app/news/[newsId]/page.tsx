import React from 'react';
import Image from "next/image";

// const page = async () => {


//     const res = await fetch(`https://news-api-v2.vercel.app/api/article/${articleId}`);



const page = async ({ params }: { params: { newsId: string } }) => {
    //params is a Promise, so you need to await params, just like in your previous code.
    // const { newsId } = params;


    const { newsId } = await params;
    // console.log(newsId);


    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);

    const article = await res.json();
    const newsData = article.data;
    console.log(newsData);

    // return (
    //     <div>
    //         <h1>{newsData.title}</h1>
    //         <Image
    //             width={400}
    //             height={300}
    //             src={newsData.imageUrl}
    //             alt={newsData.imageAlt}
    //         />
    //         <p>{newsData.text}</p>
    //     </div>
    // );





    // made by AI BRO


    return (
    <main className="min-h-screen bg-gray-50">
        <article className="mx-auto max-w-4xl px-4 py-10">

            <p className="mb-3 text-sm font-semibold text-red-600">
                {newsData.source}
            </p>

            <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                {newsData.title}
            </h1>

            <p className="mb-8 text-sm text-gray-500">
                Published:{" "}
                {new Date(newsData.firstPublished).toLocaleDateString(
                    "en-BD",
                    {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    }
                )}
            </p>

            <div className="mb-8 overflow-hidden rounded-xl">
                <Image
                    width={900}
                    height={500}
                    src={newsData.imageUrl}
                    alt={newsData.title}
                    className="h-auto w-full object-cover"
                />
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm md:p-10">
                <p className="whitespace-pre-line text-lg leading-9 text-gray-800">
                    {newsData.text}
                </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
                {newsData.tags.map((tag: string) => (
                    <span
                        key={tag}
                        className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

        </article>
    </main>
);
};

export default page;