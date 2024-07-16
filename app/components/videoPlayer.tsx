

import React, { use, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube"; 

export default function VideoPlayer() {
  const videoRef = useRef(false);
  const [playing,setPlaying] = useState(false);

  const togglePlay = () => {

        videoRef.current = true
        setPlaying  (videoRef.current)
        console.log("Video playing:", videoRef.current);
  };
  const togglePause = () => {
    videoRef.current = false
    setPlaying  (videoRef.current)
    console.log("Video playing:", videoRef.current);
}

return (

  <>
    <div>
      
      <ReactPlayer
        ref={videoRef}
        controls = {false}
        playing = {playing}
        url="https://www.youtube.com/watch?v=Tn6-PIqc4UM&t"
      />
    </div>
    <button onClick={togglePlay}>Play</button>
    <button onClick={togglePause}>Pause</button>
  </>
);
};

  

