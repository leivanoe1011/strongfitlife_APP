
import React from "react";

const IndexPage = (props) => {
  
  React.useEffect(() => {

    const token = localStorage.getItem("CC_Token");
    console.log("In the Index Page");
    console.log(token);

    // If the Token is not loaded in the Local Storage
    // Then we re-route to the Login Page

    if (!token) {
      props.history.push("/login");
    } else {
      props.history.push("/dashboard");
    }

    // To supress the error below
    // React Hook React.useEffect has a mission dependency: 'prop.history' 
    // we comment the line below!!!

    // eslint-disable-next-line
  }, [0]); // The 0
  return <div></div>;
};

export default IndexPage;


