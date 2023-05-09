import React from "react";
import VideoList from "./VideoList";

function Accordion({ chapter }) {
  const { key, title, time, videoList } = chapter;
  const id = "#collapse" + key;
  const ids = "collapse"+key;
  return (
    <div className="accordion-item bg-dark text-white">
      <h2 className="accordion-header">
        <button
          className="accordion-button bg-dark text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={id}
        >
          <div className="d-flex flex-column">
            <h6>{title}</h6>
            <p>{time}</p>
          </div>
        </button>
      </h2>
      <div
        id={ids}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <VideoList videoList = {videoList}/>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
