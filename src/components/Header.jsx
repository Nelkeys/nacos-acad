import React from "react";

const Header = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center space-y-1 w-full max-w-xl">
      <div className="text-center py-5">
        <h1 className="text-4xl font-semibold">
          <span className="text-[#10660bfc]">NACOS</span> ACADEMIA
        </h1>
      </div>

      {/* Search Form */}
      <form className="relative z-10 w-full flex">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Find topics, authors, or research content..."
          className="w-full rounded-l-lg bg-[#424242] text-white text-base pl-4 py-3 focus:outline-none placeholder-[#5f5d5d]"
        />

        {/* Search Button */}
        <button className="bg-[#10660bfc] px-6 text-white font-semibold rounded-r-lg cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
