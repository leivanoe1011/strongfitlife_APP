

// import React from "react";
// import axios from "axios";


const AuthService = {

    logout : async ()=>{
        const res = await fetch('http://localhost:8000/user/logout');
        const data = await res.json();
        return data;
    },

    login : async (user) =>{

        const requestOptions = {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify( {user} )
        }

        const res = await fetch("http://localhost:8000/user/login", requestOptions);
        const data = await res.json();      

        if (data.status !== 401) {
            return data;
        }
        else {
            return { isAuthenticated: true, data};
        }
    },

    register : async (user) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user })
        };

        // fetch("",{})
        const res = await fetch('http://localhost:8000/user/register', requestOptions);
        const data = await res.json();
        return data;
        
    }
}


export default AuthService;






