import React, { useContext } from "react";
// import React, { useState, useContext, useEffect } from "react";
import AuthService from "../Services/AuthService";
import makeToast from "../Toaster";
import { AuthContext } from "../Context/AuthContext";
// import { withRouter } from "react-router-dom";
import {useHistory} from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function LoginPage () {

  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const history = useHistory();


  // Used to track the persistent autherication token
  // Use Context will use the Auth Context file which contains the Autherization
  // of the user
  const authContext = useContext(AuthContext);

  const loginUser = (e) => {
    e.preventDefault();

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    AuthService.login(user).then((response) => {
      
      const { message, token, role, userId } = response;

      makeToast("success", message);

      // Here we load the Token to the Local Storage
      // The App JS will get the Token
      localStorage.setItem("CC_Token", token);

      localStorage.setItem("CC_role", role);

      localStorage.setItem("CC_UserId", userId);


      // Call the setup Socket function from the APP.JS
      // This will get the Token stored above in the Local Storage
      authContext.setupSocket();

      // After user is logged in, we load the Dashboard page
      // This is possible with the withRouter React Function at the end
      // props.history.push("/dashboard");
      history.push("/dashboard");

      
    });
  };

  return (
    <div style={{minHeight: "100vh"}}>
      <div className="d-flex justify-content-center" style={{ padding: 25 }}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={loginUser}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

// You can get access to the history object's properties and
// the closest <Route>'s match via the withRouter
// higher-order component. withRouter will pass updated match,
// location, and history props to the wrapped component whenever it renders
// export default withRouter(LoginPage);
export default LoginPage;


