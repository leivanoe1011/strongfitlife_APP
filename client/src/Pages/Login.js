import React from "react";
import makeToast from "../Toaster";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginPage = (props) => {

  // Another way to update the state of a variable
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const loginUser = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    axios
      .post("http://localhost:8000/user/login", {
        email,
        password,
      })
      // The response contains the Success Message and Token from the 
      // User Controller Login Function in the Back End
      .then((response) => { 


        console.log("After logged In");
        
        console.log(response.data);


        makeToast("success", response.data.message);

        // Here we load the Token to the Local Storage
        // The App JS will get the Token
        localStorage.setItem("CC_Token", response.data.token);

        localStorage.setItem("User_Role", response.data.role);

        // After user is logged in, we load the Dashboard page
        // This is possible with the withRouter React Function at the end
        props.history.push("/dashboard");


        // Call the setup Socket function from the APP.JS
        // This will get the Token stored above in the Local Storage
        props.setupSocket();


      })
      .catch((err) => {
        // console.log(err);
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
          makeToast("error", err.response.data.message);
      });
  };

  return (
    <Card  style={{ width: '18rem' }}>
          <Card.Body>
            
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"  
                        ref={emailRef}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  
                        type="password" 
                        placeholder="Password" 
                        ref={passwordRef} />
                </Form.Group>

                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>

        </Card.Body>

    </Card>
    
  );
};

// You can get access to the history object's properties and 
// the closest <Route>'s match via the withRouter 
// higher-order component. withRouter will pass updated match, 
// location, and history props to the wrapped component whenever it renders
export default withRouter(LoginPage);














