import MainNews from "../components/MainNews";
import Marquee from "../components/Marquee";
import Image from "next/image";


// export default  function async Home() {     WRONG SYNTAX. async function should be used instead of function async. So the correct syntax is: export default async function Home() { ... }
export default async function  Home() {

const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
const data = await res.json();
const sections = data.data;
// const heading = sections[0]
const heading = sections[0].articles;
// console.log(sections);
console.log(heading);

  return (
    <>
    <Marquee/>
    <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
{/* main Section */}
<div className="col-span-2">


  
<MainNews mainNews={heading}/>


</div>


{/* সর্বাধিক পঠিত Section */}
<div className="col-span-1"></div>



    </div>
    </>
)};
