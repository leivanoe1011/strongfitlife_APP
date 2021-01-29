
import React from "react";
import axios from "axios";
import makeToast from "../Toaster";

const RegisterPage = (props) => {
  const firstNameRef = React.createRef();
  const lastNameRef = React.createRef();
  const dobRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const roleRef = React.createRef();

  const registerUser = () => {
    
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const dob = dobRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const role = roleRef.current.value;


    axios
      .post("http://localhost:8000/user/register", {
        firstName, 
        lastName,
        dob,
        email,
        password,
        role
      })
      .then((response) => {

        // Will create a success toast
        makeToast("success", response.data.message);

        props.history.push("/login");

      })
      .catch((err) => {
        // console.log(err);
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )

        // Create Error Toast
        makeToast("error", err.response.data.message);
      });
  };

  return (
    <div className="card">
      <div className="cardHeader">Registration</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            ref={firstNameRef}
          />
        </div>
        <div className="inputGroup">
        <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Doe"
            ref={lastNameRef}
          />
        </div>
        <div className="inputGroup">
        <label htmlFor="dob">Date of Birth</label>
          <input
            type="text"
            name="dob"
            id="dob"
            placeholder="10-11-1986"
            ref={dobRef}
          />
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="abc@example.com"
          ref={emailRef}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          ref={passwordRef}
        />
      </div>
      {/* Need to make this a drop-down */}
      <div className="inputGroup">
        <label htmlFor="role">Role</label>
        <input
          type="text"
          name="role"
          id="role"
          placeholder="Your Role"
          ref={roleRef}
        />
      </div>
      
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default RegisterPage;
