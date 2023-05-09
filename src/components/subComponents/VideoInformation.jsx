import React from "react";

function VideoInformation({ title }) {
  return (
    <div className="d-flex justify-content-between my-3">
      <h5 className="text-xl text-lg">{title}</h5>
      <div className="d-flex justify-content-between w-auto">
      <button className="btn video-btn-outlined btn-outline-primary">Previous</button>
        <button className="btn btn-primary video-btn">Next</button>
      </div>
    </div>
  );
}

export default VideoInformation;
