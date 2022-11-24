import React, { useState, useEffect } from "react";
import "./Paaru.css";
import audi from "../src/audio/audiopaaru.mp3";
import ReactAudioPlayer from "react-audio-player";
const Paaru = () => {
  let [val, setVal] = useState(0);
  let playfun = () => {
    new Audio(audi).play();
  };
  useEffect(() => {
    playfun();
  }, [val]);

  return (
    <>
      <div className="heart">
        <span style={{ fontSize: 30 }}>Happy</span>❤
        <span style={{ fontSize: 30 }}>Birthday</span>
      </div>
      <div>
        <p>
          <img
            src="https://i.ibb.co/zXhy9c5/paru.jpg"
            alt="no image"
            onClick={() => setVal(1)}
          />
        </p>
        <h1 className="font">my JAAN(PAARU)</h1>
        {/* <audio controls autoPlay={useref} src={audio}></audio> */}
        {/* <ReactAudioPlayer src={audi} autoPlay={true} />; */}
      </div>
    </>
  );
};

export default Paaru;
