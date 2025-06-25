import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { storyBundles } from "../data/stories";
import Hero from "./hero";



const StoryGrid = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const handleBuy = async (bundle) => {
    const res = await fetch(`${BASE_URL}/api/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bundle),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <>
         <Hero/>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
   
  {storyBundles.map((bundle) => (
  <div
    key={bundle.id}
    className="bg-white rounded-2xl p-6 shadow-md border border-transparent hover:border-gold hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition duration-300 ease-in-out"
  >
    <h3 className="text-2xl font-serif font-bold text-plum mb-2">
      {bundle.title}
    </h3>

    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
      {bundle.description}
    </p>

    <p className="text-lg font-semibold text-gold mb-4">
      {(bundle.price / 100).toFixed(2)} AED
    </p>

    <button
      onClick={() => handleBuy(bundle)}
      className="w-full bg-gold text-plum py-2 px-4 rounded-lg font-semibold shadow-md hover:shadow-lg hover:bg-yellow-400 transition duration-200"
    >
      Buy Now 
    </button>
  </div>
))}

    </div>
        </>
  );
};

export default StoryGrid;
