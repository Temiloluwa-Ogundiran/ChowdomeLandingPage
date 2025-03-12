import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
   const menuItems = [
      {
         name: "Home",
         href: "/",
      },
      {
         name: "About",
         href: "/about",
      },
      {
         name: "Vendor",
         href: "/vendor",
      },
   ];

   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <>
         <div className="relative w-full px-4 bg-white">
            <div className="flex items-center justify-between py-2 mx-auto max-w-7xl sm:px-6 lg:px-10">
               <Link to={"/"}>
                  <div className="inline-flex items-center space-x-2">
                     <div className="flex flex-col justify-between my-5 lg:flex-row">
                        <div className="">
                           <span className="text-xl font-thin lg:text-3xl">
                              <img src="../assets/fav.png" alt="" />
                           </span>
                           <div className="font-bold ">
                              Chow <span className="text-cyellow">dome</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </Link>

               <div className="items-start hidden grow lg:flex ">
                  <ul className="inline-flex space-x-8 ml-52">
                     {menuItems.map((item) => (
                        <li key={item.name}>
                           <Link
                              to={item.href}
                              className="text-sm font-semibold text-gray-800 transition-all ease-in-out duration-400 hover:text-yellow">
                              {item.name}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>


               {/* Mobile Screen */}
               <div className="lg:hidden">
                  <Menu
                     onClick={toggleMenu}
                     className="w-6 h-6 cursor-pointer"
                  />
               </div>
               {isMenuOpen && (
                  <div className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform lg:hidden">
                     <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                           <div className="flex items-center justify-between">
                              <div className="-mr-2">
                                 <button
                                    type="button"
                                    onClick={toggleMenu}
                                    className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 ">
                                    <span className="sr-only">Close menu</span>
                                    <X className="w-6 h-6" aria-hidden="true" />
                                 </button>
                              </div>
                           </div>
                           <div className="mt-6">
                              <nav className="grid gap-y-4">
                                 {menuItems.map((item) => (
                                    <Link
                                       key={item.name}
                                       to={item.href}
                                       className="flex items-center p-3 -m-3 text-sm font-semibold rounded-md hover:bg-gray-50">
                                       <span className="ml-3 text-base font-medium text-gray-900">
                                          {item.name}
                                       </span>
                                    </Link>
                                 ))}
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </>
   );
};

export default Navbar;
