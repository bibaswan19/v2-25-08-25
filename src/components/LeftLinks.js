import React from "react";
import "./LeftLinks.css";

const Links = () => {
  return (
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
  );
};

export default Links;
