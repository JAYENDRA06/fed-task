import React from "react";
import VideoList from "./VideoList";

function InnerAccordion({videoList, id}) {
    const aid = "#innerCollapse"+id;
    const aids = "innerCollapse"+id;
  return (
    <div className="accordion-item bg-dark text-white">
      <h2 className="accordion-header">
        <button
          className="accordion-button bg-dark text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={aid}
          aria-controls={aids}
        >
          <div className="d-flex flex-column">
            <p>title</p>
          </div>
        </button>
      </h2>
      <div
        id={aids}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <VideoList />
        </div>
      </div>
    </div>
  );
}

export default InnerAccordion;
