import React from "react";

function VideoList({ videoList }) {

    const videos = videoList.map((video) => (
        <li className="list-group-item bg-dark text-light">{video.title}</li>
    ))
  return (
    <ul className="list-group">
      {videos}
    </ul>
  );
}

export default VideoList;
