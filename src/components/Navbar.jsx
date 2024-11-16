import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const setNavScrollEffect = () => {
    if (window.scrollY >= 95) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", setNavScrollEffect);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <header
      className={`sticky top-0 flex items-center py-2  md:px-6 z-50 ease-in duration-200 ${
        menuOpen ? "px-0" : "px-6"
      } ${navScroll ? "light-orange shadow-md" : ""}`}
    >
      {menuOpen && (
        <ul className="md:hidden bg-[#FFF9F2] text-4xl flex flex-col items-center justify-evenly absolute top-0 w-full h-[100vh] mt-0 py-4 font-semibold">
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#FC9329]"
              to="/#hero"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#FC9329]"
              to="/#skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#FC9329]"
              to="/#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#FC9329]"
              to="/#portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#FC9329]"
              to="/#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}

      <nav className="sticky top-0 container flex items-center justify-between">
        <div className="flex">
          <Link to="/#hero">
            <img
              className={`${menuOpen ? "hidden" : "flex"} md:flex`}
              src={logo}
              alt="A.C Initials Logo"
            />
          </Link>
        </div>
        <ul className="hidden md:flex gap-8 font-semibold">
          <li>
            <Link className="hover:font-bold hover:drop-shadow-2xl" to="/#hero">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:font-bold hover:drop-shadow-2xl"
              to="/#skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="hover:font-bold hover:drop-shadow-2xl"
              to="/#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:font-bold hover:drop-shadow-2xl"
              to="/#portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="hover:font-bold hover:drop-shadow-2xl"
              to="/#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button className={`md:hidden absolute right-6 ${menuOpen && "top-6"}`}>
        {menuOpen ? (
          <FontAwesomeIcon
            onClick={toggleNav}
            className="text-3xl text-[#FC9329]"
            icon={faX}
          />
        ) : (
          <FontAwesomeIcon
            onClick={toggleNav}
            className="text-3xl hover:text-[#FC9329]"
            icon={faBars}
          />
        )}
      </button>
    </header>
  );
}

export default Navbar;
