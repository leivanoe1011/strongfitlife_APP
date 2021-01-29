

import React, { createContext, useState, useEffect } from 'react';

// import AuthService from "../setupTests/AuthService";
import io from "socket.io-client";
import makeToast from "../Toaster";

export const AuthContext = createContext();

export default ({children}) => {

    // The login page will set up the authenticated, role
    const [socket, setSocket] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState("");

    // Once the user is logged in, then they go to the Local Storage 
    // And grab the Token
    // This Function is executed when the Setup Socket function is returned
    // from the Login Page
    const setupSocket = () => {
        
        // If the token does not currently live in the Local Storage
        // We get a new token
        const token = localStorage.getItem("CC_Token"); 

        const role = localStorage.getItem("CC_role");


        // If token exists and Socket is NULL
        if (token && !socket) {

            // Connect to the server and validate the token
            // This will go to the function in the Server where we are 
            // Initializing the IO middleware
            // Below passing the token in the local Storage to the Server and validate
            const newSocket = io("http://localhost:8000", {
                query: {
                    token: localStorage.getItem("CC_Token"),
                    role: localStorage.getItem("CC_role")
                },
            });


            newSocket.on("disconnect", () => {

                setSocket(null);
                setTimeout(setupSocket, 3000);
                makeToast("error", "Socket Disconnected!");
                setIsAuthenticated(false);

            });


            // This call the IO.ON("connection") function
            // We can attach a listener to fire when we've connected to the server
            newSocket.on("connect", () => {
                  
                makeToast("success", "Socket Connected!");

            });

            setSocket(newSocket);

            setIsAuthenticated(true);

            setRole(role);
                            
        }

    };


    // When the page loads, this gets Executed first
    useEffect(() => {
        setupSocket();
        //eslint-disable-next-line
    }, []);


    return (
        <div>
           {/* The variables below will be available to be accessed to all Lower Level components */}
            <AuthContext.Provider value={{ userId, setUserId, isAuthenticated, setIsAuthenticated, role, setRole, setupSocket, socket}}>
                { children }
            </AuthContext.Provider>
        </div>
    )

}


