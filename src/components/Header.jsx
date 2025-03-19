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
        <h1 className="text-4xl font-semibold">
          <span className="text-[#10660bfc]">NACOS</span> ACADEMIA
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
          className="w-full rounded-l-md bg-[#424242] text-white text-base pl-4 py-3 focus:outline-none placeholder-[#5f5d5d]"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="bg-[#10660bfc] hover:bg-[#10660bda] px-6 text-white font-semibold rounded-r-md cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
