import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>There is no shortcut to the success</h1>
        <p>
          There is no shortcut to success; it demands persistence, hard work,
          and dedication. True success is built on a foundation of consistent
          effort, learning from failures, and embracing challenges. While quick
          fixes may seem tempting, they rarely lead to lasting achievements.
          Each step in the journey, no matter how small, contributes to personal
          growth and ultimate triumph. Success earned through patience and
          perseverance is far more rewarding and meaningful.
        </p>
        <button className="btn">Explore More<span><i class="fa-solid fa-arrow-right"></i></span></button>
      </div>
    </div>
  );
};

export default Hero;
