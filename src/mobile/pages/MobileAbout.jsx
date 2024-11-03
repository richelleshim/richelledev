import React from "react";
import "../index.css";
import { comingSoonImg } from "../utils/index.js";

const MobileAbout = () => {
  return (
    <div className="mobile-container">
      <header className="mobile-header">
        <h1 className="mobile-title">MOBILE IN PROGRESS</h1>
      </header>
      <section className="about-content">
        <img src={comingSoonImg} />

        <p className="about-text">
          Hello! I'm Richelle Shim, a junior at UCLA majoring in Math of
          Computation. I'm passionate about technology for social good, math,
          and creating meaningful projects that make an impact.
        </p>
        <p className="about-text">
          In my free time, I enjoy Pilates, golf, hiking, and learning about new
          areas in statistics, data science, and computer graphics.
        </p>
        <p className="about-text">
          This website looks best on computer, as the layout was heavily
          inspired by Netflix! Please come back to this website on desktop for
          the best experience while we fix this issue! Thank you! 
        </p>
        <p className="about-text">
          Much Love- Richelle 😚💋
        </p>
      </section>
    </div>
  );
};

export default MobileAbout;
