import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import supabase from "../utils/supabase";
import Header from "../components/Header";
import Markdown from "react-markdown";

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    <div className="w-32 h-4 bg-[#1a1a1ac9] rounded"></div>
    <div className="w-full h-6 bg-[#1a1a1ac9] rounded"></div>
    <div className="w-full h-40 bg-[#121212c9] rounded"></div>
  </div>
);

const Read = () => {
  const { title } = useParams();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("query") || "";

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!title) return;

    const fetchArticle = async () => {
      setLoading(true);
      try {
        let { data, error } = await supabase
          .from("academia-table")
          .select("*")
          .ilike("title", title.replace(/-/g, " ")) // Match the title
          .single();

        if (error) throw error;
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
      setLoading(false);
    };

    fetchArticle();
  }, [title]);

  const calculateReadingTime = (text) => {
    if (!text) return "1 min read";
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  };

  return (
    <div className="bg-[#121212] min-h-screen flex flex-col items-center px-4 py-6">
      <Header query={queryParam} />
      <div className="text-white w-full max-w-xl mt-10 space-y-6">
        {loading ? (
          <SkeletonLoader />
        ) : article ? (
          <div>
            <div className="flex items-center justify-between">
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
              <div className="bg-[#171717] border border-[#313131] py-2 px-3 rounded-2xl">
                <p className="text-sm text-gray-300">
                  {calculateReadingTime(article.content)}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="featured text-2xl text-center font-bold text-[#15803d]">
                {article.title}
              </h2>
            </div>

            <div className="mt-4 text-gray-400 space-y-4  md:text-lg">
              <Markdown>{article.content}</Markdown>
            </div>
          </div>
        ) : (
          <p className="text-gray-400 text-center">Article not found.</p>
        )}
      </div>
    </div>
  );
};

export default Read;
