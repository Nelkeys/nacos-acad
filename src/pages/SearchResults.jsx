import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import supabase from "../utils/supabase";
import Header from "../components/Header";

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="w-full p-4 bg-[#121212c9] rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1a1a1ac9] rounded-full"></div>
          <div>
            <div className="w-24 h-4 bg-[#1a1a1ac9] rounded"></div>
            <div className="w-16 h-3 bg-[#1a1a1ac9] rounded mt-1"></div>
          </div>
        </div>
        <div className="mt-2">
          <div className="w-3/4 h-5 bg-[#1a1a1ac9] rounded"></div>
          <div className="w-full h-4 bg-[#1a1a1ac9] rounded mt-2"></div>
        </div>
      </div>
    ))}
  </div>
);

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
      <Header query={queryParam} />
      <div className="text-white w-full max-w-xl mt-10 space-y-6">
        {loading ? (
          <SkeletonLoader />
        ) : articles.length > 0 ? (
          articles.map((article) => (
            <div
              key={article.id}
              className="w-full p-4 bg-[#121212c9] rounded-lg"
            >
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
                  <Link
                    to={`/${encodeURIComponent(
                      article.title.toLowerCase().replace(/\s+/g, "-")
                    )}`}
                  >
                    {article.title}
                  </Link>
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
