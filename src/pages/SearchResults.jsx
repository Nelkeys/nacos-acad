import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase"; // Ensure you have Supabase client setup
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("query") || "";

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        let { data, error } = await supabase
          .from("academia-table")
          .select("id, title, author, author_image, date, content")
          .or(
            `title.ilike.%${queryParam}%,author.ilike.%${queryParam}%,content.ilike.%${queryParam}%`
          );

        if (error) throw error;
        setArticles(data || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
      setLoading(false);
    };

    fetchArticles();
  }, [queryParam]);

  return (
    <div className="bg-[#030303] min-h-screen flex flex-col items-center px-4 py-6">
      <Header />
      <div className="text-white w-full max-w-xl mt-10 space-y-6">
        {loading ? (
          <p className="text-white text-lg">Loading articles...</p>
        ) : articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="w-full p-4 bg-[#121212c9] rounded-lg">
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full border border-white"
                  src={article.author_image}
                  alt={article.author}
                />
                <div>
                  <p className="text-white">{article.author}</p>
                  <p className="text-sm text-gray-400 font-light">
                    {article.date}
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-lg font-semibold text-[#10660bfc] hover:underline cursor-pointer">
                  {article.title}
                </p>
                <p className="text-gray-400">
                  {article.content.substring(0, 100)}...
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
