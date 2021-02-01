import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

function LeftNav() {
  const { isAuthenticated } = useContext(AuthContext);
  // const { isAuthenticated, role } = useContext(AuthContext);

  const unauthenticatedNavBar = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/#features">
            TESTIMONIAL
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/#contact">
            BLOG
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/#features">
            CONTACT
          </Link>
        </li>
        <li className="nav-item ml-4">
          {/* <Link className="nav-link" to="/#contact">BOOK A CALL</Link> */}
          <button className="bookCall">BOOK A CALL</button>
        </li>
      </>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <>
        {/* {(role === "admin") ? adminUserNavLinks() : notAdminUserNavLink()} */}

        <li className="nav-item">
          <Link className="nav-link" to="/#features">
            RIGHT1
          </Link>
        </li>
      </>
    );
  };

  return (
    <>{isAuthenticated ? authenticatedNavBar() : unauthenticatedNavBar()}</>
  );
}

export default LeftNav;
