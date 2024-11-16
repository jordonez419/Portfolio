import React from 'react';
import { Link } from 'react-router-dom';
import OrangeRectangle from '/images/orangeRectangleHero.png';
import AlejandroPointing from '/images/alejandroImg-min.png';
import juan from '/images/juan.jpg';

function HeroSection() {
  return (
    <section id="hero" className="px-6 -mt-[95px]">
      <div className="relative container min-h-[100vh] flex flex-col justify-center md:flex-row md:justify-between md:items-center">
        {/* Hero Text */}
        <div className="flex flex-col text-center gap-4 w-full pt-32 pb-20 md:text-left md:pb-0 md:w-[40%] md:pt-24">
          <img
            className="md:hidden w-full mx-auto max-w-[300px]"
            src={juan}
            alt=""
          />
          <h2 className="text-3xl font-semibold text-[#4B6CB7]">
            Software Developer
          </h2>
          <h1 className="text-6xl font-bold">Hey! I Am</h1>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#1E3A8A] to-[#4B6CB7] text-transparent bg-clip-text inline-block py-4">
            Juan Ordonez
          </h1>
          <p className="text-[#9E9E9E] text-2xl">
            A Software Developer who makes visions come true with the power of
            code!
          </p>
          <Link
            to="/#portfolio"
            className="uppercase tracking-wide mx-auto md:mx-0 text-2xl font-semibold mt-4 w-fit orange text-white px-4 py-2 rounded-md ease-in-out duration-200 hover:scale-105 hover:bg-gradient-to-r from-[#1E3A8A] to-[#4B6CB7]"
          >
            View Portfolio
          </Link>
        </div>
        {/* Hero Image */}
        <div className="">
          <img
            className="hidden md:flex absolute z-10 max-h-[100vh] top-0 -right-20"
            src={OrangeRectangle}
            alt=""
          />
          <img
            className="hidden md:flex z-20 max-h-[110vh] absolute -right-20 juanImg"
            src={juan}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
