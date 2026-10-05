// import React from 'react';

import NewsCard from "@/components/NewsCard";

// const categoryNews = () => {
//     return (
//         <div>                                                                categoryNews x  CategoryNews right
//             yo cetagory news
//         </div>
//     );
// };

// export default categoryNews;





// import React from 'react';

// const CategoryNews = ({params}) => {

// const {catagoryId} = params


//     return (
//         <div>
//             yo cetagory news
//         </div>
//     );
// };

// export default CategoryNews;





//Your code is close. The main thing to check is categoryId vs catagoryId and what the API actually returns.

const CategoryNews = async ({params}) => {

// const {catagoryId} = await params
const {categoryId} = await params
const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
const data = await res.json();
// console.log(data);

const categoryData = data.data;
// console.log(categoryData);


    return (
        <div>
            <h2 className="font-bold text-3xl border-b-4 border-red-800">{data.title}</h2>


            <div className="grid grid-cols-3 ">

{categoryData.map(cd => <NewsCard key={cd.id} article={cd} />)}

            </div>
        </div>
    );
};

export default CategoryNews;