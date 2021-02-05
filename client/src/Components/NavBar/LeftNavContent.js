import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../../Context/AuthContext";

import NavDropdown from 'react-bootstrap/NavDropdown';

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
        <NavDropdown title="PROGRAMS" id="basic-nav-dropdown">
          <NavDropdown.Item  href="/unleashBeast">Unleash the beast</NavDropdown.Item>
          <NavDropdown.Item href="/personalTraining">1:1 Personal training</NavDropdown.Item>
        </NavDropdown>
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
