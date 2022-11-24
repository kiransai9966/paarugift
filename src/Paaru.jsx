import React from "react";
import "./Paaru.css";

const Paaru = () => {
  return (
    <>
      <div className="heart">
        <span style={{ fontSize: 30 }}>Happy</span>❤
        <span style={{ fontSize: 30 }}>Birthday</span>
      </div>
      <div>
        <p>
          <img src="https://i.ibb.co/zXhy9c5/paru.jpg" alt="no image" />
        </p>
        <h1 className="font">my JAAN(PAARU)</h1>
        <audio controls="" autoPlay="">
          <source
            src="./WhatsApp Audio 2022-11-24 at 6.24.50 PM.mp3.mpeg"
            type="audio/mpeg"
          />
        </audio>
      </div>
    </>
  );
};

export default Paaru;
