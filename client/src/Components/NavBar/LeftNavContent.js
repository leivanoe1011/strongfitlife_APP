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
          <Link className="nav-link" to="/myStory">
            MY STORY
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            PROGRAMS
          </Link>
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
            LEFT
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/#contact">
            LEFT2
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
