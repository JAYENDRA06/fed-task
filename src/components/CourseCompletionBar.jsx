import React from "react";

function CourseCompletionBar() {
  return (
    <div className="d-flex justify-content-between mb-3">
      <p className="my-auto">Course Content</p>
      <div
        className="progress my-auto"
        role="progressbar"
        aria-valuenow={25}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar"></div>
      </div>
    </div>
  );
}

export default CourseCompletionBar;
