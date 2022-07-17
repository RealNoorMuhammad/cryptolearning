import React from 'react'

import gingerVideo from './vdeo.mp4'

function VideoPlayer() {
  const toggleVideo = () => {
      let video = document.getElementsByClassName('video')[0];
      let playpause = document.getElementsByClassName('playpause')[0];
      if (video.paused) {
        video.play();
        playpause.setAttribute('hidden', '');
      } else {
        video.pause();
        playpause.removeAttribute('hidden');
      }
  }
  return (
    <div class="videoCon" onClick={toggleVideo}>
        <video controls class="video" autoplay="autoplay" loop="loop" style={{width:"90%"}}>
            <source src={gingerVideo} type="video/mp4" controls />
        </video>
        <div class="playpause"></div>
    </div>
  )
}

export default VideoPlayer