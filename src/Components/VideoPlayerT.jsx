import React from "react";

import gingerVideo from "./video.mp4";

function VideoPlayerT() {
  const toggleVideo = () => {
    let video = document.getElementsByClassName("video")[0];
    let playpause = document.getElementsByClassName("playpause")[0];
    if (video.paused) {
      video.play();
      playpause.setAttribute("hidden", "");
    } else {
      video.pause();
      playpause.removeAttribute("hidden");
    }
  };
  return (
    <div class="videoCon" onClick={toggleVideo}>
      <video
        class="video"
        autoplay="autoplay"
        loop="loop"
        muted="muted"
        style={{ width: "100%" }}
      >
        <source src={gingerVideo} type="video/mp4" controls />
      </video>
      <div class="playpause"></div>
    </div>
  );
}

export default VideoPlayerT;
