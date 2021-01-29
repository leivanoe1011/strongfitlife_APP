import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/StrongLifeLogo.png";

import LeftNav from "./LeftNavContent";
import RightNav from "./RightNavContent";

import MobileLogo from "../../images/StrongLifeLogo.png";

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{ backgroundColor: "black"}}
      >
        <Link className="navbar-brand" to="/">
          <img
            style={{ width: 125 }}
            className="d-none d-lg-block"
            src={Logo}
            alt="Strong fit life logo"
          />
        </Link>

        <Link className="mobileBrand" to="/">
          <img height="50px" width="50px" src={MobileLogo} alt="mobile logo"></img>
        </Link>

        <button
          className="navbar-toggler justify-content-end"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Justify-content-between will 
                    create the effect of left middle and end Nav Objects */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarText"
        >
          <ul className="navbar-nav">
            <LeftNav />
          </ul>

          <ul className="navbar-nav">
            <RightNav />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
