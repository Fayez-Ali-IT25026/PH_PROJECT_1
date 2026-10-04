import React from 'react';

const MostRead = async () => {

const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
const data = await res.json();
const mostRead = data.data;
console.log(mostRead);

    return (
        <div className = "card bg-base-100 shadow-sm border border-gray-300 p-2 ">

           <div>
            <h2 className='font-bold text-red-600 mb-2'>সর্বাধিক পঠিত</h2>
           </div>
           <div className = "grid gap-2 mt-5 ">
            {

mostRead.map((mr,i) => <div key={mr.id} className = "flex gap-5 justify-center items-center">
    <p className='font-bold text-red-700'>{i+1}</p>
    <h2 className='py-3'>{mr.title}</h2>
</div>)
            }
           </div>
            
        </div>
    );
};

export default MostRead;