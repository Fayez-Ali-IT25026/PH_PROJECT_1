import Image from "next/image";
import Link from "next/link";


interface mainNewsType {
    id:             string;
    title:          string;
    description:    string;
    link:           string;
    // API returns null for these on some articles
    imageUrl:       string | null;
    imageAlt:       string | null;
    category:       string;
}




const NewsCard = ({ article }: { article: mainNewsType }) => {
    return (

        //gird-cols will not work but grid will work . grid-cols have to apply on page.tsx on map side 
        <div className = "grid gap-5 mt-5 grid-cols-3 ">
            <div className=" card bg-base-100 w-[250px] shadow-sm">


                {/* making a card link */}
              {/* <figure>
                <Image
                width={400}
                height={300}
                    src={article.imageUrl}
                  alt={article.imageAlt} />
              </figure>
              <div className="card-body">
                <p className='text-red-600 font-semibold'>{article.category}</p>
                <h2 className="card-title">{article.title}</h2>
                <p>{article.description}</p> */}





                {/* <Link href="/news/"> */}
                

                <Link href={`/news/${article.id}`}>

                {/* skip the figure when the API gives no image, and fall back to the headline as alt text */}
                {article.imageUrl && (
                <figure>
                <Image
                width={400}
                height={300}
                    src={article.imageUrl}
                  alt={article.imageAlt || article.title} />
              </figure>
                )}
              <div className="card-body">
                <p className='text-red-600 font-semibold'>{article.category}</p>
                <h2 className="card-title">{article.title}</h2>
                <p>{article.description}</p>
                 </div>



                </Link>
                
              </div>
        </div>
       
    );
};

export default NewsCard