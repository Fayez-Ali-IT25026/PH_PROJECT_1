import NewsCard from "@/components/NewsCard";
import MainNews from "../components/MainNews";
import Marquee from "../components/Marquee";
import Image from "next/image";



interface mainNewsType {
    id:             string;
    title:          string;
    description:    string;
    link:           string;
    imageUrl:       string;
    imageAlt:       string;
    category:       string;
    type:           string;
    isLive:         boolean;
    firstPublished: null;
    lastPublished:  null;
    source:         string;
    curationId:     string;
    articles:       {
        id:             string;
        title:          string;
        description:    string;
        link:           string;   
}
}











// export default  function async Home() {     WRONG SYNTAX. async function should be used instead of function async. So the correct syntax is: export default async function Home() { ... }
export default async function  Home() {

const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
const data = await res.json();
const sections = data.data;
// const heading = sections[0]
const heading = sections[0].articles;
// console.log(sections);
// console.log(heading);

//added type
// const otherSections = sections.slice(1);

const otherSections: mainNewsType[] = sections.slice(1);
console.log(otherSections);

  return (
    <>
    <Marquee/>
    <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
{/* main Section */}
<div className="col-span-2">


  
<MainNews mainNews={heading}/>
<div className="grid gap-5 mt-5">
   {otherSections.map(os => <div key={os.curationId} className = "font-bold ">                                              
     
            <h2 className="border-b-2 border-red-700">{os.title}</h2>
   <div className = "grid grid-cols-3 gap-20 mt-5  ">
{
            //  os.map(oa => <div key={oa.id} className="card bg-base-100 w-96 py-5 shadow-sm border border-gray-300 my-2 gap-1">




//new concept of mapping the articles of each section to the NewsCard component. So we will use the NewsCard component to display the articles of each section. The NewsCard component is a reusable component that takes an article as a prop and displays it in a card format. So we will map the articles of each section to the NewsCard component and pass the article as a prop to the NewsCard component. This way we can reuse the NewsCard component for each article of each section.
            os.articles.map(oa=> <NewsCard key={oa.id} article={oa} />)

   }


   </div>



  </div>)}
</div>


</div>


{/* সর্বাধিক পঠিত Section */}
<div className="col-span-1"></div>



    </div>
    </>
)};
