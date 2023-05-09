import React from "react";

function Navbar() {
  const listTitles = [
    "Concept Crackerz",
    "Level 2",
    "Course Details",
    "Support",
    "Blog",
    "My Classes",
  ];

  const list = listTitles.map((item) => (
    <li className="nav-item" key={item}>
      <a className="nav-link" aria-current="page" href="#">
        {item}
      </a>
    </li>
  ));

  const imageLink = "https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg";

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container-fluid mx-5">
        <a className="navbar-brand" href="#">
          Geeks of Gurukul
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">{list}</ul>

          <button className="btn btn-custom" type="submit">
            Enroll Now
          </button>
          <a className="nav-link" href="#">
            <img src={imageLink} className="ml-5 rounded-circle" width="40" height="40" alt="Profile Picture" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
