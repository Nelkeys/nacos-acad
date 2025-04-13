import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ query }) => {
  const [searchTerm, setSearchTerm] = useState(query); // Store search text locally
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`); // Update URL
    }
  };

  return (
    <div className="text-white flex flex-col items-center justify-center space-y-1 w-full max-w-xl">
      <div className="text-center mt-7 py-5">
        <h1
          className="text-3xl md:text-4xl font-medium cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="featured text-[#15803d]">NACOS</span> ACADEMIA
        </h1>
      </div>

      {/* Search Form */}
      <form className="relative z-10 w-full flex gap-2" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          id="search"
          value={searchTerm} // Controlled input
          onChange={(e) => setSearchTerm(e.target.value)} // Allow typing
          placeholder="Enter topic, author.."
          className="w-full rounded-full bg-[#242424] border border-[#313131] text-white text-base pl-4 py-2.5 focus:outline-none placeholder-[#5f5d5d]"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="bg-[#006239] border border-[#3ab57e] hover:bg-[#006259] transition px-6 text-white text-sm font-normal rounded-full cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
