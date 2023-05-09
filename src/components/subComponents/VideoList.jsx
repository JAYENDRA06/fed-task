import React from "react";

function VideoList({ videoList, setVideoTitle }) {

    const videos = videoList.map((video) => (
        <li className="list-group-item bg-dark text-light" onClick={() => setVideoTitle(video.title)}>{video.title}</li>
    ))
  return (
    <ul className="list-group">
      {videos}
    </ul>
  );
}

export default VideoList;
