import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/admin");
  };

  return (
    <div className="text-center py-20 bg-gradient-to-b from-yellow-50 to-white">
      <h1 className="text-5xl font-serif font-bold text-plum drop-shadow-md">
        Read. Dream. Win.
      </h1>
      <p className="text-lg mt-4 text-gray-700">
        Discover cozy folktales & win magical prizes.
      </p>

      <button
        onClick={handleGoToDashboard}
        className="mt-8 px-6 py-3 bg-plum text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
      >
        Go to Admin Dashboard
      </button>
    </div>
  );
};

export default Hero;
