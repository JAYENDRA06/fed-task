import React from "react";
import VideoPlayer from "./subComponents/VideoPlayer";
import VideoInformation from "./subComponents/VideoInformation";
import CourseVideoList from "./CourseVideoList";

function CourseVideos() {
  return (
    <div className="mx-5">
      <div className="row">
        <div className="col-lg-7 col-md-12">
          <VideoPlayer />
          <VideoInformation title="1-4 Different Types Of Heading And Strong Tag" />
        </div>
        <div className="col-lg-5 col-md-12">
          <CourseVideoList />
        </div>
      </div>
    </div>
  );
}

export default CourseVideos;
