import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="container flex flex-col gap-12">
        <div className="flex justify-center md:justify-start items-center space-x-2">
          <div className="w-16 border-t-2 border-2 border-[#1E3A8A]"></div>
          <p className="font-semibold uppercase tracking-wider text-sm text-[#1E3A8A]">
            Contact Me
          </p>
          <div className="w-16 border-t-2 border-2 border-[#1E3A8A]"></div>
        </div>
        <h1 className="text-5xl font-bold text-center md:text-left">
          Your Best Candidate
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
          <div>
            <h3 className="text-lg md:text-xl text-[#9E9E9E] tracking-wide text-center md:text-left mb-4">
              Email
            </h3>
            <p className="text-xl md:text-2xl font-semibold break-all">
              j.ordonez419@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl text-[#9E9E9E] tracking-wide text-center md:text-left mb-4">
              My Location
            </h3>
            <p className="text-xl md:text-2xl font-semibold">
              Chicago, Illinois
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text lg md:text-xl text-[#9E9E9E] tracking-wide text-center md:text-left mb-4">
              LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/juan-ordonez419/"
              target="_blank"
              className="text-center md:text-left"
            >
              <FontAwesomeIcon
                className="h-8 md:h-12 ease-in-out duration-200 hover:text-[#FC9329]"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
