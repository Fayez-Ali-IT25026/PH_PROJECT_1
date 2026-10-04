import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"







 
 interface MarqueeNews {
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
}










const Marquee = async () => {


const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
const data = await res.json();
const news = data.data;
console.log(news);


    return (
        <div className="bg-red-700 text-white  w-full px-4 sm:px-6 lg:px-8">
            
<div className="flex items-center gap-2 py-1 overflow-hidden whitespace-nowrap max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
    <p className="bg-red-800 text-white">সর্বশেষ</p>
    <MarqueeText direction="right" duration={10}>

    {news.map((m: MarqueeNews) => (<span key={m.id}><span>{m.title}</span><span className='mx-5'>•</span></span>) )}
</MarqueeText>
</div>

        </div>
    );
};

export default Marquee;