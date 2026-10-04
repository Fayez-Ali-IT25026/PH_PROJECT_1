import Link from "next/link";




// Define the NavLink interface to match the structure of the data returned from the API in one word type of object
 interface NavLink {
    slug:      string;
    title:     string;
    topicId:   null;
    url:       string;
    scrapable: boolean;
}






const Navlinks = async () => {

const res = await fetch("https://news-api-v2.vercel.app/api/categories");
const data = await res.json();


// because of the data structure, we need to access the data property to get the array of nav links
const navs = data.data;

// filter the navs array to only include the navs that have scrapable set to true
const filteredNavs = navs.filter((n: NavLink) => n.scrapable === true);
// console.log(data);
// console.log(navs);
console.log(filteredNavs);

 return (
        <div className="flex justify-center gap-5 bg-gray-100 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            

           < Link href="/">হোম</Link>


           {/* have to add curly braces to the Link component to make it work properly. */}
            {/* navs.map((n,i) => <Link key={i} href={n.slug}>{n.title}</Link>) */}



            {/* navs has all but we only want to show the ones that have scrapable set to true. So we will use the filteredNavs array instead of the navs array. */}
            {/* {navs.map((n,i) => <Link key={i} href={n.slug}>{n.title}</Link>)} */}


            {filteredNavs.map((n: NavLink, i: number) => <Link key={i} href={n.slug}>{n.title}</Link>)}


        </div>
    );
};

export default Navlinks;