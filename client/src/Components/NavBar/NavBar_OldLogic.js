

import React, { useState, useEffect, useContext } from 'react';

import {
    Link, Redirect
} from "react-router-dom";
import Button from "react-bootstrap/Button"
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext"


function RightNav(){

    const { isAuthenticated, setIsAuthenticated, role } = useContext(AuthContext);

    let listener = null
    const [scrollState, setScrollState] = useState("clear");

    
    useEffect(() => {
        
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 120) {
                if (scrollState !== "bg-dark") {
                    setScrollState("bg-dark")
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("clear")
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])
    
    
    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                // setUser(data.user);
                setIsAuthenticated(false);
                // return  <Redirect  to="/" />
                return <Redirect to="/" />
        
            }
        });
    }
    
    const unauthenticatedNavBar = () => {
    
        return (
            <>
                {/* It's only here to create a link */}
                {/* <div className="log-in float-right">
                    <a data-toggle="modal" data-target="#myModal" href="#">
                        log in
                                </a>
                    <Login />
                </div> */}
    
                <li className="nav-item">
                    <Link className="nav-link" to="/login" >Login</Link>
                </li>
    
            </>
        )
    }
    
    
    const notAdminUserNavLink = () => {
    
        return (
            <>
                {(role === "teacher" && role === "admin") ? <Button href="/createForm">Create Assignment</Button> : null}
    
            </>
        )
    }
    
    const adminUserNavLinks = () => {
    
        return (
            <>
                {/* <Button href="/createForm">Create Assignment</Button>
                <Button href="/classCreate">Create Class</Button>
                <Button href="/adminCreateUser">Admin Create User</Button> */}
    
    
                <li className="nav-item">
                    <Link className="nav-link" to="/adminCreateUser">Create User</Link>
                </li>
    
    
            </>
        )
    }
    
    
    const authenticatedNavBar = () => {
        return (
            <>
                {(role === "admin") ? adminUserNavLinks() : notAdminUserNavLink()}
    
    
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
    
                <li className="nav-item">
                    <Link className="nav-link" to="/logout" onClick={onClickLogoutHandler}>Logout</Link>
                </li>
    
    
            </>
        )
    }
    
    
    return(
        <div>    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
                {/* <a href="/">Home</a> */}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/#features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#contact">Contact us</Link>
                        </li>
    
                        {isAuthenticated ? authenticatedNavBar() : unauthenticatedNavBar()}
    
    
                    </ul>
                    <span className="navbar-text">
                        Template Page
                    </span>
                </div>
            </nav>
    
        </div>
    )
}


export default RightNav;

