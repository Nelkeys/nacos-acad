import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <meta
          name="description"
          content="NACOS Academia is a dedicated search engine for Computer Science students. Search and explore articles on various Computer Science topics to enhance your learning experience."
        />
        <meta
          name="keywords"
          content="NACOS, Academia, NACOS Academia, Computer Science, Akwa Ibom State University, resources, past questions, timetables, NACOS study materials, academic resources, NACOS past questions, AKSU NACOS, Computer Science study tools, Akwa Ibom State University academics, NACOS timetables, NACOS AKSU materials, study guides, exam preparation, class schedules, Computer Science student hub, academic support, AKSU resources, NACOS educational platform, NACOS resources for students, academic excellence with NACOS, student materials, AKSU past papers"
        />
        <meta name="author" content="NACOS Academia Team" />
        <meta
          property="og:title"
          content={
            article
              ? `${article.title} | NACOS Academia`
              : "NACOS Academia | Resources for Computer Science Students"
          }
        />
        <link rel="canonical" href="https://nacos-acad.vercel.app/" />
      </Helmet>
      <div className="bg-[#121212] min-h-screen flex flex-col items-center px-4 py-6">
        <Header query={queryParam} />
        <div className="text-white w-full max-w-xl mt-10 space-y-6">
          {loading ? (
            <SkeletonLoader />
          ) : articles.length > 0 ? (
            articles.map((article) => (
              <div
                key={article.id}
                className="w-full px-4 py-6 bg-[#171717] border border-[#313131] rounded-lg"
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
                  <p className="text-lg font-semibold text-[#15803d] hover:underline cursor-pointer">
                    <Link
                      to={`/${encodeURIComponent(
                        article.title.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                    >
                      {article.title}
                    </Link>
                  </p>
                  <p className="text-gray-400 text-base">
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
    </>
  );
};

export default SearchResults;
