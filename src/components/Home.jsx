import React from 'react';
import Image from '../assets/images/myImage.jpeg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-8 md:gap-12">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md mx-auto md:mx-0">
            Passionate about building responsive and accessible web applications.
            Experienced with React, Node.js, MongoDB, and modern web technologies.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-60 h-100 md:w-100 md:h-80 rounded-full overflow-hidden shadow-lg">
          <img
            src={Image}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
