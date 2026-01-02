import React, { useRef } from "react";
import "../styles/game.css";

import billimg from "../images/blondie.png";    
import billaudio from "../images/pecos.mp3"; 

export default function Game() {
  const billsoundref = useRef(null);

  const playbillsound = () => {
    if (!billsoundref.current) return;
    billsoundref.current.currentTime = 0;
    billsoundref.current.play();
  };

  return (
    <div className="game-page">

      <audio ref={billsoundref} src={billaudio} preload="auto" />

      <div className="game-header">
        <h1>Play While You Wait</h1>
      </div>

      <div className="game-description">
        <h3>Kill time while your food is being made</h3>
      </div>

      <div className="bill-wrapper">
        <img
          src={billimg}
          alt="pecos bill"
          className="bill-img"
          onClick={playbillsound}
        />
      </div>

      <div className="game-box">
        <iframe
          src="https://idev.games/embed/unstable"
          title="Unstable Game"
          className="game-iframe"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
        />
      </div>

      <div className="game-footer">
        <h3>We Hope You Loved Our Restaurant!!</h3>
      </div>
    </div>
  );
}
