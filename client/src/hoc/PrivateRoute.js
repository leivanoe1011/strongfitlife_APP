
import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({component : Component, roles, ...rest})=>{


    console.log("in Private Route HOC")
    
    const { isAuthenticated, role} = useContext(AuthContext);

    console.log(role)

    console.log(isAuthenticated);


    return(
        
        // ...rest is equal to path="/route"
        <Route {...rest} render={props =>{

            // If user not authenticated, reroute to login
            if(!isAuthenticated)
                return <Redirect to={{ pathname: '/login', 
                                       state : {from : props.location}}}/>
            
            // If the role of the current user does not match a valid role, redirect to Home page
            if(!roles.includes(role))
                return <Redirect to={{ pathname: '/', 
                                 state : {from : props.location}}}/>

            return <Component {...props}/>
        }}/>
    )
}

export default PrivateRoute;

