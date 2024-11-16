import React from 'react';
import { Link } from 'react-router-dom';
import alejandroGuitarImg from '/images/alejandroGuitar.png';
import alejandroHikingImg from '/images/alejandroHiking.png';
import juanMiniGolf from '/images/minigolf.jpg';
import juanBaseball from '/images/baseball.jpg';
import juanJordan from '/images/Mj.jpg';

function AboutSection() {
  return (
    <section id="about" className="px-6 py-32 light-orange">
      <div className="container flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between md:items-center">
        {/* Images */}
        <h1 className="flex justify-center md:hidden text-5xl font-bold">
          About Me
        </h1>
        <div className="w-full md:w-[50%] grid grid-cols-6">
          <img
            className="shadow-md col-start-1 col-span-6 row-start-2 row-span-3 z-10 juanBaseball"
            src={juanBaseball}
            alt=""
          />
          <img
            className="col-start-4 col-span-3 row-start-1 row-span-3 z-20 border-8 border-[#FFF9F2] translate-y-12"
            src={juanMiniGolf}
            alt=""
          />
        </div>
        {/* Text */}
        <div className="flex flex-col gap-4 w-full md:w-[45%]">
          <div className="flex items-center space-x-2">
            <div className="w-16 border-t-2 border-2 border-[#1E3A8A]"></div>
            <p className="font-semibold uppercase tracking-wider text-sm text-[#1E3A8A]">
              My Journey
            </p>
          </div>
          <h1 className="hidden md:flex text-5xl font-bold">About Me</h1>
          <p className="tracking-wide">
            I'm a Sofware Developer located in Chicago. My passion for code
            began when I took my first programming class in University. I fell
            in love with creating web applications due to the creative aspect of
            it and the endless possibilites for innovation and problem solving.
            My expertise lies in building intuitive user friendly applications
            using technologies such as React,Vue, Node.js, Express, PostgreSQL,
            MongoDB, HTML, CSS, and JavaScript.
          </p>
          <p className="tracking-wide">
            When I'm not coding, I love to stay in shape mentally and physically
            with weightlifting, learning new skills, reading, and travelling the
            world. Learning about new cultures, inovations, and ways of life,
            has always been something that I've been passionate about and its
            what continues to fuel my technical and creative journey!
          </p>
          <Link
            to="/#portfolio"
            className="uppercase tracking-wide mx-auto md:mx-0 text-2xl font-semibold mt-4 w-fit orange text-white px-4 py-2 rounded-md ease-in-out duration-200 hover:scale-105 hover:bg-gradient-to-r from-[#1E3A8A] to-[#4B6CB7]"
          >
            My Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
