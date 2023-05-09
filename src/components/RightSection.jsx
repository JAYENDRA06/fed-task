import React from "react";
import CourseCompletionBar from "./CourseCompletionBar";
import InputBox from "./subComponents/InputBox";
import CourseVideoList from "./CourseVideoList";
import SummaryBtn from "./subComponents/SummaryBtn";

function RightSection({setVideoTitle}) {
  return (
    <div className="container-fluid h-100">
      <div className="row h-15">
        <div className="col-sm-12">
          <CourseCompletionBar />
          <InputBox />
        </div>
      </div>
      <div className="row h-70">
        <div className="col-sm-12">
          <CourseVideoList setVideoTitle={setVideoTitle} />
        </div>
      </div>
      <div className="row h-15">
        <div className="col-sm-12">
          <SummaryBtn />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
