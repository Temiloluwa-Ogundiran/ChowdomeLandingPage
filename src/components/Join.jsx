import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
   return (
      <div className=" lg:flex lg:w-full lg:h-[40vw] lg:items-center lg:justify-center lg:bg-cyellow lg:-my-10">
         <section className="pt-10 my-10 ">
            <div className="mx-auto max-w-7xl">
               <div className="max-w-2xl mx-auto text-center">
                  <div className="flex justify-center -space-x-2 isolate">
                     <img
                        className="relative z-30 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="https://images.pexels.com/photos/19986226/pexels-photo-19986226/free-photo-of-portrait-of-smiling-teenager-student.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                     />
                     <img
                        className="relative z-20 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="https://img.freepik.com/premium-photo/handsome-young-african-student-smiling-outdoors-with-bag_33839-11829.jpg?ga=GA1.1.571393071.1741796566&semt=ais_authors_boost"
                        alt=""
                     />
                     <img
                        className="relative z-10 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="https://images.pexels.com/photos/18028052/pexels-photo-18028052/free-photo-of-portrait-of-an-university-student.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                     />
                     <img
                        className="relative z-0 inline-block rounded-full h-14 w-14 ring-4 ring-white"
                        src="https://img.freepik.com/free-photo/portrait-male-student-with-books_23-2148882426.jpg?ga=GA1.1.571393071.1741796566&semt=ais_authors_boost"
                        alt=""
                     />
                  </div>

                  <h2 className="mt-8 text-2xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
                     Join <span className="border-b-8 border-white">2,492</span>{" "}
                     other Fooders
                  </h2>
                  <p className="max-w-xl mx-auto mt-6 text-base text-gray-600 md:mt-10 lg:text-xl">
                     Indulge in a world of flavors. Join us at Chow{" "}
                     <span className="text-white">dome</span> and savor the
                     beauty of delicious moments. Culinary joy awaits – sign up
                     today!
                  </p>
                  <button>
                     <Link
                        target="_blank"   
                        to={"https://t.me/Chowdome_bot"}
                        type="button"
                        className="px-3 py-2 mt-8 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:text-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        Join Now
                     </Link>
                  </button>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Join;
