import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/nacos-logo.png"; 

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-white bg-black px-4">
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img
          src={Logo}
          alt="NACOS Logo"
          className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-contain blur-xs"
        />
      </div>

      <div className="text-center mb-20">
        <h1 className="text-4xl font-semibold">
          <span className="text-[#10660bfc]">NACOS</span> ACADEMIA
        </h1>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="relative z-10 w-full max-w-xl flex">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Find topics, authors, or research content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-l-lg w-full bg-[#424242] text-white text-base pl-4 py-3 focus:outline-none placeholder-[#5f5d5d]"
        />

        <button
          type="submit"
          className="bg-[#10660bfc] px-6 text-white font-semibold rounded-r-lg cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
