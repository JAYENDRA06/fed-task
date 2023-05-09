import React from "react";

function InputBox() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control bg-dark text-light"
        placeholder="Search lesson"
        aria-label="Search lesson"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        search
      </button>
    </div>
  );
}

export default InputBox;
