import React from "react";
import VideoPlayer from "./subComponents/VideoPlayer";
import VideoInformation from "./subComponents/VideoInformation";
import RightSection from "./RightSection";

function CourseVideos() {
  return (
    <div className="mx-5">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <VideoPlayer />
          <VideoInformation title="1-4 Different Types Of Heading And Strong Tag" />
        </div>
        <div className="col-lg-4 col-md-12">
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default CourseVideos;
