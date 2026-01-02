import React, { useEffect } from "react";
import "../styles/contacts.css";
import { useRef } from "react";
import clintImg from "../images/clint.png";    
import clintAudio from "../images/clintaudio.mp3";   

import { FaInstagram, FaFacebook, FaTwitter, FaLink } from "react-icons/fa";

const Contact = () => {
      const clintSoundRef = useRef(null);

const playClintSound = () => {
  if (!clintSoundRef.current) return;
  clintSoundRef.current.currentTime = 0;
  clintSoundRef.current.play();
};

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const handleMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="contact-page">

      <div id="cards">

        <div className="card">
          <div className="card-content">
            <div className="card-icon">
              <FaInstagram />
            </div>
            <h2>Instagram</h2>
            <p>Followers: <span>33K</span></p>
            <a href="#">
              <FaLink className="link-icon" />
              <span>Follow me</span>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-icon">
              <FaFacebook />
            </div>
            <h2>Facebook</h2>
            <p>Followers: <span>12K</span></p>
            <a href="#">
              <FaLink className="link-icon" />
              <span>Follow me</span>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-icon">
              <FaTwitter />
            </div>
            <h2>Twitter</h2>
            <p>Followers: <span>8K</span></p>
            <a href="#">
              <FaLink className="link-icon" />
              <span>Follow me</span>
            </a>
          </div>
        </div>

      </div>

      
      <div className="divider"></div>

      
      <div className="map-section">

        
<div className="clint-wrapper">
  <img
    src={clintImg}
    alt="cowboy stare"
    className="clint-cowboy"
    onClick={playClintSound}
  />
</div>

<audio ref={clintSoundRef} src={clintAudio} preload="auto" />

        <h2 className="map-title">Find Us</h2>

        <iframe
          className="map-frame"
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.07702380456!2d-112.10151658481709!3d33.354072080788195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b1081deaa9e4d%3A0x444bce1ecf60606e!2sT-Bone%20Steak%20House!5e0!3m2!1sen!2sus!4v1703496600000"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;
