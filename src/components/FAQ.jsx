import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
   return (
      <section className="px-4 py-10 mx-auto max-w-7xl ">
         <div>
            <div className="max-w-3xl mx-auto lg:text-center">
               <h2 className="text-3xl font-bold te:xt-black lg:leading-tight sm:text-4xl lg:text-5xl">
                  Frequently Asked{" "}
                  <span className="font-serif text-yellow">Questions</span>
               </h2>
            </div>
            <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 md:mt-16 md:grid-cols-2">
               <div>
                  <h2 className="text-xl font-semibold text-black">
                     What is the latest time to order?
                  </h2>
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                  The latest time to place an order is 7 PM. We accept orders throughout the evening until then, so be sure to place yours in time!
                  </p>
               </div>
               <div>
                  <h2 className="text-xl font-semibold text-black">
                     What is your delivery radius?
                  </h2>
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                     We currently deliver to all the halls of residence in Covenant university. Your room no would be collected during the checkout process.
                  </p>
               </div>
               <div>
                  <h2 className="text-xl font-semibold text-black">
                     How can I track my order?
                  </h2>
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                     Once your order is confirmed, you will receive a
                     confirmation with the delivery personel's contact. You can also track your order on our bot
                     under the "Order Status" section.
                  </p>
               </div>
               <div>
                  <h2 className="text-xl font-semibold text-black">
                     What is the average wait time for my order to arrive{" "}
                  </h2>
                  <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                  Yes, we know you're eager to receive your order! On average, deliveries arrive within 20 to 45 minutes, depending on your location and order volume.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FAQ;
