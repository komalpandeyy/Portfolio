import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, I’m Komal Pandey — a passionate developer with a strong foundation in computer science. I’m currently pursuing my MCA (2023–2025), after completing my B.Sc (Hons) in Computer Science from the University of Delhi.I specialize in building full-stack web applications using the MERN stack and have developed multiple projects that reflect my skills in real-world problem-solving. Alongside web development, I’m expanding my knowledge in machine learning and deep learning because I love exploring how technology can solve meaningful problems.

I’m someone who genuinely enjoys learning — whether it’s improving my DSA skills, experimenting with new frameworks, or understanding system design concepts. I’ve built projects ranging from full-stack web apps to AI-based tools, and I’m always curious to build more.

Apart from coding, I enjoy watching tech podcasts, exploring creative ideas, and challenging myself with new learning goals. Right now, I’m actively preparing for technical interviews and building projects that not only solve problems but also teach me something new every time.

Let’s build something impactful together.
        </p>

        <br />

        
      </div>
    </div>
  );
};

export default About;