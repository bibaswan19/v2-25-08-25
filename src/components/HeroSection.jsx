import React from "react";
import Slider from "react-slick";
import "./HeroSection.css";
import { FaChalkboardTeacher, FaUsers, FaChartLine, FaBookOpen, FaUserTie } from "react-icons/fa";
import sampleImage1 from "../assets/1.png";
import sampleImage2 from "../assets/2.png";
import sampleImage3 from "../assets/3.png";
import sampleImage4 from "../assets/4.png";
import sampleImage5 from "../assets/5.png";
import sampleImage6 from "../assets/6.png";
import sampleImage7 from "../assets/7.png";
import sampleImage8 from "../assets/8.png";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true, // ✅ fade transition
  };

  return (
    <div className="hero-container" id="home">
      {/* Left side */}
      <div className="hero-left">
        <h1>YOUR SUCCESS, OUR GOAL</h1>
        <p className="hero-subtext">
          There’s no shortcut to success, but there’s always the right guidance – 
          find it at <span>Bibaswan</span>.
        </p>

        <div className="hero-tags">
          <p><FaChalkboardTeacher className="hero-icon" /> Expert Faculty Mentorship</p>
          <p><FaUsers className="hero-icon" /> Friendly & Supportive Community</p>
          <p><FaChartLine className="hero-icon" /> Personal Performance Monitoring</p>
          <p><FaBookOpen className="hero-icon" /> Daily MCQs + PYQs</p>
          <p><FaUserTie className="hero-icon" /> 1:1 Progress Guidance</p>
        </div>
      </div>

      {/* Right side (Slideshow + Badge) */}
      <div className="hero-right">
        <div className="hero-slider-wrapper">
          <Slider {...settings}>
            <div><img src={sampleImage1} alt="Slide 1" /></div>
            <div><img src={sampleImage2} alt="Slide 2" /></div>
            <div><img src={sampleImage3} alt="Slide 3" /></div>
            <div><img src={sampleImage4} alt="Slide 4" /></div>
            <div><img src={sampleImage5} alt="Slide 5" /></div>
            <div><img src={sampleImage6} alt="Slide 6" /></div>
            <div><img src={sampleImage7} alt="Slide 7" /></div>
            <div><img src={sampleImage8} alt="Slide 8" /></div>
          </Slider>
        </div>
        <div className="badge-course">Book a free demo today</div>
      </div>
    </div>
  );
};

export default HeroSection;

