import Image from 'next/image';

const MainNews = ({ mainNews }) => {

// Get the first news item
// const firstNews = mainNews[0]; 

   

const [firstNews , ...otherNews] = mainNews;




// Get the next 4 news items
// const otherNews = mainNews.slice(1); 

    return (
        <div className="flex  gap-10">
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
    width={400}
    height={300}
        src={firstNews.imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p className='text-red-600 font-semibold'>{firstNews.category}</p>
    <h2 className="card-title">{firstNews.title}</h2>
    <p>{firstNews.description}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>






<div className="grid  gap-2">
    {otherNews.slice(0, 4).map(on => <div key={on.id} className="card bg-base-100 w-96 py-5 shadow-sm border border-gray-300 my-2 gap-1">
 <p className='text-red-600 font-semibold'>{firstNews.category}</p>
        {on.title}
    </div>)}

</div>

        </div>
    );
};

export default MainNews;