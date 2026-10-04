import Image from "next/image";


interface mainNewsType {
    id:             string;
    title:          string;
    description:    string;
    link:           string;
    imageUrl:       string;
    imageAlt:       string;
    category:       string;
}




const NewsCard = ({ article }: { article: mainNewsType }) => {
    return (

        //gird-cols will not work but grid will work . grid-cols have to apply on page.tsx on map side 
        <div className = "grid gap-20 mt-5 grid-cols-3 ">
            <div className=" card bg-base-100 w-[250px] shadow-sm">
              <figure>
                <Image
                width={400}
                height={300}
                    src={article.imageUrl}
                  alt={article.imageAlt} />
              </figure>
              <div className="card-body">
                <p className='text-red-600 font-semibold'>{article.category}</p>
                <h2 className="card-title">{article.title}</h2>
                <p>{article.description}</p>
                
              </div>
        </div>
        </div>
    );
};

export default NewsCard