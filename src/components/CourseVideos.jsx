import React, { useState } from "react";
import VideoPlayer from "./subComponents/VideoPlayer";
import VideoInformation from "./subComponents/VideoInformation";
import RightSection from "./RightSection";

function CourseVideos() {
  const [videoTitle, setVideoTitle] = useState("1-4 Different Types Of Heading And Strong Tag");

  return (
    <div className="mx-5">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <VideoPlayer />
          <VideoInformation title={videoTitle} />
        </div>
        <div className="col-lg-4 col-md-12">
          <RightSection setVideoTitle = {setVideoTitle} />
        </div>
      </div>
    </div>
  );
}

export default CourseVideos;
