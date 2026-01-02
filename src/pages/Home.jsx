import React from "react";
import FadeCarousel from "../components/FadeCarousel";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-cover">
      <div className="flag-layout">

        <div className="red"></div>

        <div className="white"></div>

        <div className="red"></div>

        <div className="center-area">
          <FadeCarousel />
        </div>

        <div className="red"></div>

        <div className="white"></div>

        <div className="red"></div>

      </div>
    </div>
  );
}
