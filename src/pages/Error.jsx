import React from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Error = () => {
   return (
      <>
         <Navbar />

         <div className="flex items-center justify-center px-2 my-12 md:my-24 md:px-0">
            <div className="lg:flex lg:items-center lg:space-x-10">
               <img
                  src="https://illustrations.popsy.co/white/resistance-band.svg"
                  alt="question-mark"
                  className="h-[300px] w-auto"
               />
               <div>
                  <p className="mt-6 text-sm font-semibold text-black">
                     404 error
                  </p>
                  <h1 className="mt-3 text-2xl font-semibold text-yellow md:text-3xl">
                     We can&apos;t find that page
                  </h1>
                  <p className="mt-4 text-gray-500">
                     Sorry, the page you are looking for doesn&apos;t exist or
                     has been moved.
                  </p>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Error;
