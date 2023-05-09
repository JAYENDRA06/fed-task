import React from "react";

function VideoList() {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="item1"
          disabled
        />
        <label className="form-check-label" htmlFor="item1">
          Item 1
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="item2"
          disabled
        />
        <label className="form-check-label" htmlFor="item2">
          Item 2
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="item3"
          disabled
        />
        <label className="form-check-label" htmlFor="item3">
          Item 3
        </label>
      </div>
    </>
  );
}

export default VideoList;
