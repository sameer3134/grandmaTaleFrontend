import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/admin");
  };

  return (
    <section className="bg-gradient-to-br from-yellow-50 to-white py-20 px-6 md:px-12">
      {/* Header: Wordmark and Dashboard Button (stacked on mobile) */}
      <div className="max-w-6xl  flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        {/* Wordmark */}
        <h2 className="text-3xl md:text-4xl font-extrabold lowercase text-gold tracking-tight">
          grandmatales
        </h2>

        {/* Admin Button (visible only on md+) */}
        <div className="hidden md:block">
          <button
            onClick={handleGoToDashboard}
            className="px-5 py-2 bg-plum text-white font-medium rounded-full shadow hover:bg-indigo-700 transition duration-300"
          >
            Go to Admin Dashboard
          </button>
        </div>
      </div>

      {/* Tagline + Subtitle + Button (on mobile) */}
      <div className="max-w-4xl  text-left">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-plum leading-tight drop-shadow-sm">
          Read. Dream. Win.
        </h1>

        <p className="text-lg mt-4 text-gray-700 max-w-xl">
          Discover cozy folktales & win magical prizes. A storytelling experience like no other.
        </p>

        {/* Mobile Button */}
        <div className="mt-6 md:hidden">
          <button
            onClick={handleGoToDashboard}
            className="px-5 py-2 bg-plum text-white font-medium rounded-full shadow hover:bg-indigo-700 transition duration-300"
          >
            Go to Admin Dashboard
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
