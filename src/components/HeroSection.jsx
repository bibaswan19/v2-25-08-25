import React from 'react';
import './HeroSection.css';
import sampleImage from '../assets/heroimage.jpg';

// Importing icons
import { FaChalkboardTeacher, FaUsers, FaChartLine, FaBookOpen, FaUserTie } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      <div className="hero-left">
        <h1>YOUR SUCCESS, OUR GOAL</h1>
        <p className="hero-subtext">
          There’s no shortcut to success, but there’s always the right guidance – find it at <span>Bibaswan</span>.
        </p>

        {/* Tags with icons */}
        <div className="hero-tags">
          <p><FaChalkboardTeacher className="hero-icon" /> Expert Faculty Mentorship</p>
          <p><FaUsers className="hero-icon" /> Friendly & Supportive Community</p>
          <p><FaChartLine className="hero-icon" /> Personal Performance Monitoring</p>
          <p><FaBookOpen className="hero-icon" /> Daily MCQs + PYQs</p>
          <p><FaUserTie className="hero-icon" /> 1:1 Progress Guidance</p>
        </div>
      </div>

      <div className="hero-right">
        <img src={sampleImage} alt="Instructor" />
        <div className="badge-course">📘 25+ Available courses</div>
      </div>
    </div>
  );
};

export default HeroSection;
