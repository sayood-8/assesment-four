import { Play } from "next/font/google";
import React, { useRef, useState } from "react";
import ReactPlayer, { YouTubePlayerProps } from "react-player/youtube"; // Make sure to import the correct props type

export default function VideoPlayer() {
  const videoRef = useRef<ReactPlayer | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.seekTo(0); // Start playing from the beginning
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (
    <>
      <div>
        <ReactPlayer
          ref={videoRef}
          playing ={}
          url="https://www.youtube.com/watch?v=Tn6-PIqc4UM&t"
        />
      </div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </>
  );
}
