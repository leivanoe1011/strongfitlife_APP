import React, { createContext, useState, useEffect } from "react";

// import AuthService from "../setupTests/AuthService";
import io from "socket.io-client";
import makeToast from "../Toaster";

import AuthServer from "../Services/AuthService";

export const AuthContext = createContext();

export default ({ children }) => {
    // The login page will set up the authenticated, role
    const [socket, setSocket] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState("");


    var socketIoPort = "";


    const authorizeUser = async () => {
         
        // If the token does not currently live in the Local Storage
        // We get a new token
        const storageToken = localStorage.getItem("CC_Token"); 


        // If token exists and Socket is NULL
        // Need to validate is not "Undefined"
        if ((storageToken === undefined) || (storageToken == null) || (storageToken == "undefined")){
            console.log("Storage Token is null or undefined")
        }
        else{
            
            await AuthServer
            .authenticate({token :storageToken })
            .then((response) =>{
                                    
                setRole(response.role);

                setUserId(response.userId);

                setIsAuthenticated(true);
    
                setupSocket();
            })
        }

    } 


    // Once the user is logged in, then they go to the Local Storage 
    // And grab the Token
    // This Function is executed when the Setup Socket function is returned
    // from the Login Page
    const setupSocket = async () => {
                
        // const configObj = dotenv.config.Scopes;
        // Might just be able to package Socket IO PORT through Server Host
        if (process.env.NODE_ENV === "production") {
            socketIoPort = "https://strongfitlife-app.herokuapp.com/";
        } else {
            socketIoPort = "http://localhost:8000";
        }

        if (!socket || socket === undefined) {


            const storageToken = localStorage.getItem("CC_Token"); 

            const storageRole = localStorage.getItem("CC_role");


            // Connect to the server and validate the token
            // This will go to the function in the Server where we are 
            // Initializing the IO middleware
            // Below passing the token in the local Storage to the Server and validate
            const newSocket = io(socketIoPort, {
                query: {
                    token: storageToken,
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

            setRole(storageRole);
                            
        }

    };


    // When the page loads, this gets Executed first
    useEffect(() => {

        // setupSocket();

        authorizeUser();

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

