

import Image from "next/image";
import Navlinks from "./Navlinks";
// import { Link } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";



const Navbar = () => {


// const handeleSignOut = () => {

// authClient.signOut();

// }


// Get the current date in Bengali format new concept
const date = new Date().toLocaleDateString("bn-BD", { 
    dateStyle: "full", 
});
//end of Get the current date in Bengali format new concept




    return (
        <div className="bg-white max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
  <nav>
    <div className="relative flex items-center justify-end py-3">

      
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={40}
          height={40}
        />

        <div>
          <p>Bangla News 24</p>
          <p>{date}</p>
        </div>
      </div>

      
      <div className="flex gap-2">


{/* <button onClick={handeleSignOut} className="bg-red-500 text-white rounded-3xl"></button> */}



  <Link href="/signin" className="btn">
    সাইন ইন
   
  </Link>

  <Link
    href="/signup"
    className="btn bg-red-700 text-white hover:bg-red-800"
  >
    সাইন আপ
   
  </Link>
</div>

    </div>
  </nav>

  <Navlinks />
</div>
    );
};

export default Navbar