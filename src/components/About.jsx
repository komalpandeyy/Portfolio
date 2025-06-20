import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-1" >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

        <p className="text-lg leading-relaxed text-gray-300">
          Hi, I’m <span className="text-blue-400 font-semibold">Komal Pandey</span>, a full-stack web developer with a strong foundation in computer science.
          <br />
          <br />
          I’m currently pursuing my MCA (2023–2025) at IGDTUW, after completing my B.Sc (Hons) Computer Science from the University of Delhi.
          <br />
          <br />
          I specialize in building scalable web applications using the <span className="text-blue-400">MERN stack</span>, with projects like{" "}
          <span className="text-pink-400 font-medium">Memories</span> (a journaling app),{" "}
          <span className="text-pink-400 font-medium">MuKo ID Generator</span>, and{" "}
          <span className="text-pink-400 font-medium">Enchanted Home</span> (a real-time chat app).
          <br />
          <br />
          I’m also passionate about AI and Machine Learning, showcased through my project{" "}
          <span className="text-pink-400 font-medium">FireYOLO</span> — a comparative analysis of YOLO variants for real-time fire detection.
          <br />
          <br />
          When I’m not coding, I love exploring new technologies, sharpening my DSA skills, and preparing for technical interviews.
          <br />
          <br />
          <span className="text-blue-400 font-semibold">Let’s connect and build something meaningful together.</span>
        </p>
      </div>
    </div>
  );
};

export default About;
