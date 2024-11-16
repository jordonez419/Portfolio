import React from "react";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";

// Animate on Scroll Import
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.75}
        offset={360}
        animateOnce={true}
      >
        <SkillsSection />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.75}
        offset={360}
        animateOnce={true}
      >
        <AboutSection />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.75}
        offset={360}
        animateOnce={true}
      >
        <PortfolioSection />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.75}
        offset={300}
        animateOnce={true}
      >
        <ContactSection />
      </ScrollAnimation>
    </>
  );
}

export default HomePage;
