import React, { useEffect, useState } from "react";
import "./LeftLinks.css";

const Links = () => {
  const [showLinks, setShowLinks] = useState(true); // default visible on desktop

  useEffect(() => {
    // Only apply scroll logic on mobile view
    if (window.innerWidth <= 768) {
      const hero = document.getElementById("home"); // HeroSection has id="home"
      if (!hero) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // On mobile: show links only when hero is NOT visible
          setShowLinks(!entry.isIntersecting);
        },
        { threshold: 0.7 }
      );

      observer.observe(hero);

      return () => {
        if (hero) observer.unobserve(hero);
      };
    } else {
      // On desktop: always show links
      setShowLinks(true);
    }
  }, []);

  return (
    <>
      {showLinks && (
        <div className="social-links">
          <span>
            <a
              href="https://www.instagram.com/bibaswanedufoundation?igsh=c2loZGpoMXk1YXR2"
              target="_blank"
              rel="noopener noreferrer"
              className="ig"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.facebook.com/Bibaswans.e.f/"
              target="_blank"
              rel="noopener noreferrer"
              className="fb"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </span>
          <span>
            <a
              href="https://youtube.com/@bibaswaneducationalfoundation1?si=FAh_e2WiXZ_abnbc"
              target="_blank"
              rel="noopener noreferrer"
              className="yt"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </span>
          <span>
            <a
              href="https://t.me/Bibaswan2024"
              target="_blank"
              rel="noopener noreferrer"
              className="tg"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
          </span>
        </div>
      )}
    </>
  );
};

export default Links;
