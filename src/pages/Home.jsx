import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase  from "../utils/supabase"; // your Supabase client
import Logo from "../assets/nacos-logo.png";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOnline, setIsOnline] = useState(null);
  const navigate = useNavigate();

  // Server check
  useEffect(() => {
    const checkServer = async () => {
      try {
        // Simple test query (adjust table name to one that exists)
        const { data, error } = await supabase
          .from("academia-table") // use an existing small table
          .select("id")
          .limit(1);

        if (error) throw error;
        setIsOnline(true);
      } catch (err) {
        setIsOnline(false);
      }
    };

    checkServer();

    // Optional: recheck every X seconds
    const interval = setInterval(checkServer, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="relative h-screen flex flex-col items-center bg-[#121212] px-4">
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img
          src={Logo}
          alt="NACOS Logo"
          className="w-[700px] h-[700px] md:w-[500px] md:h-[500px] object-contain blur-[3px]"
        />
      </div>

      <div className="text-center my-20">
        <h1 className="featured text-3xl md:text-4xl font-medium">
          <span className="text-[#15803d]">NACOS</span> ACADEMIA
        </h1>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="relative z-10 w-full max-w-xl flex gap-2"
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Enter topic, author.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-full w-full bg-[#242424] border border-[#313131] text-white text-base pl-4 py-2.5 focus:outline-none placeholder-[#5f5d5d]"
        />

        <button
          type="submit"
          className="bg-[#006239] border border-[#3ab57e] hover:bg-[#006259] transition px-6 text-white text-sm font-normal rounded-full cursor-pointer"
        >
          Search
        </button>
      </form>

      <div className="flex items-center gap-2 text-gray-400 text-sm mt-6">
        <p>Server status:</p>
        <div
          className={`w-3 h-3 rounded-full border border-gray-300 ${
            isOnline === null
              ? "bg-gray-400"
              : isOnline
              ? "bg-green-400"
              : "bg-red-500"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Home;
