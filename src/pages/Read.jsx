import React from "react";
import Header from "../components/Header";

const Read = () => {
  return (
    <div className="bg-[#030303] min-h-screen flex flex-col items-center px-4 py-6">
      <Header />

      <div className="text-white w-full max-w-xl mt-10 space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full border border-white"
                src="https://i.ibb.co/nwScD0Q/Polish-20240611-160046004-3.jpg"
                alt="Author"
              />
              <div>
                <p className="text-white">Nelson Ekoh</p>
                <p className="text-sm text-gray-400 font-light">12 Dec 2024</p>
              </div>
            </div>

            <div className="bg-[#121212c9] py-2 px-3 rounded-2xl">
              <p className="text-sm text-gray-300">2 min read</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl text-center font-bold">The Future of Artificial Intelligence</h2>
          </div>

          <div className="mt-4 text-gray-300 space-y-4">
            <p>
              Artificial Intelligence (AI) is rapidly transforming the world, influencing industries such as healthcare, finance, and transportation.
              As AI evolves, it promises to enhance automation, improve decision-making, and create new opportunities across various sectors.
            </p>
            <p>
              One of the most significant advancements in AI is the rise of **machine learning** and **deep learning**. These technologies allow machines
              to analyze vast amounts of data, recognize patterns, and make decisions with minimal human intervention. AI-driven systems, such as
              self-driving cars and intelligent virtual assistants, are becoming more sophisticated and widely adopted.
            </p>
            <p>
              However, with great power comes great responsibility. The ethical implications of AI, including privacy concerns and job displacement,
              remain topics of global debate. Governments and organizations are working to establish regulations that ensure AI is developed and used ethically.
            </p>
            <p>
              In the coming years, we can expect AI to become even more integrated into our daily lives, leading to smarter cities, enhanced medical
              diagnostics, and breakthroughs in scientific research. The key to harnessing AI's potential lies in balancing innovation with ethical considerations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
