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
      <div className="text-center py-5">
        <h1
          className="text-3xl md:text-4xl font-medium cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="featured text-[#286E34]">NACOS</span> ACADEMIA
        </h1>
      </div>

      {/* Search Form */}
      <form className="relative z-10 w-full flex" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          id="search"
          value={searchTerm} // Controlled input
          onChange={(e) => setSearchTerm(e.target.value)} // Allow typing
          placeholder="Find topics, authors, or research content..."
          className="w-full rounded-l-md bg-[#424242] text-white text-base pl-4 py-2.5 focus:outline-none placeholder-[#5f5d5d]"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="bg-[#286E34] hover:bg-[#286e34d8] px-6 text-white font-semibold rounded-r-md cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
