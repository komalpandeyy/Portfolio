import React from "react";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";
import p7 from "../assets/images/p7.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: p1,
      title: "Memories - A journalling app",
      desc: "Full-stack MERN app for adding and saving memories securely.",
      demo: "https://github.com/komalpandeyy/Memories_MERN",
      code: "https://github.com/komalpandeyy/Memories_MERN",
    },
    {
      id: 2,
      src: p2,
      title: "Comparative study of yolo variants using fire detection",
      desc: "Real-time fire and smoke detection using YOLO models.",
      demo: "https://github.com/komalpandeyy/FireSmokeDetectionYOLO",
      code: "https://colab.research.google.com/drive/1VCRa__kG4RYLlHrJl3gW19eRrR8BelTk?usp=sharing",
    },
    {
      id: 3,
      src: p3,
      title: "MuKo ID Card Generator",
      desc: "Automates ID card creation with React, Node, MongoDB.",
      demo: "https://komalpandeyy.github.io/ID_GENERATOR/",
      code: "https://github.com/komalpandeyy/ID_GENERATOR",
    },
    {
      id: 4,
      src: p4,
      title: "Enchanted Home",
      desc: "Short description about this project here.",
      demo: "https://enchantedhome-frontend.onrender.com/",
      code: "https://github.com/komalpandeyy/EnchantedHome",
    },
    {
      id: 5,
      src: p5,
      title: "Gourmet Galore",
      desc: "Short description about this project here.",
      demo: "https://gourmetgalore-frontend.onrender.com/",
      code: "https://github.com/komalpandeyy/GourmetGalore",
    },
    {
      id: 6,
      src: p6,
      title: "Quiz Point",
      desc: "Short description about this project here.",
      demo: "https://komalpandeyy.github.io/Quiz-website/",
      code: "https://github.com/komalpandeyy/Quiz-website",
    },
    {
      id: 7,
      src: p7,
      title: "Olympics Analysis",
      desc: "Short description about this project here.",
      demo: "https://github.com/komalpandeyy/Olympics_analysis",
      code: "https://github.com/komalpandeyy/Olympics_analysis",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-16 pb-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 sm:px-0">
          {portfolios.map(({ id, src, title, desc, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img
                src={src}
                alt={title}
                className="rounded-t-md w-full h-48 object-cover duration-200 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-300 mb-4">{desc}</p>
                <div className="flex justify-between">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 duration-200 text-white text-sm"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 duration-200 text-white text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
