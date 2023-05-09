import React from "react";

function VideoPlayer() {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <video
        className="embed-responsive-item"
        src="http://techslides.com/demos/sample-videos/small.webm"
        controls
      ></video>
    </div>
  );
}

export default VideoPlayer;
