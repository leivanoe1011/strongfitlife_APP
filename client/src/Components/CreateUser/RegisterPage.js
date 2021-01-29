
import React, { createRef } from "react";
// import { withRouter } from "react-router-dom";
import AuthService from "../../Services/AuthService"
import makeToast from "../../Toaster"

function Register (props) {

    const emailRef = createRef();
    const passwordRef = createRef();
    const firstNameRef = createRef();
    const lastNameRef = createRef();
    const roleRef = createRef();
    const dobRef = createRef();

    // Sends Message to the Backend
    function registerUser (e) {

        // if (event.keyCode === 13)
        // This will allow the User to get Registered 
        // before completing the rest of the function
        e.preventDefault();
        
        console.log("Register User");

        const user = {
            firstName : firstNameRef.current.value,
            lastName : lastNameRef.current.value,
            dob : dobRef.current.value,
            role : roleRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value
        }

        AuthService.register(user)
        .then(data => {
            const { message } = data;

            console.log("User registered");

            makeToast("success", message);

            props.history.push("/");
          

        })
        .catch((err) => {
            // console.log(err);
            if (
              err &&
              err.response &&
              err.response.data &&
              err.response.data.message
            )
            {
                makeToast("error", err.response.data.message);
            }          
            
        });
    }


    return(
        <div className="container">

            <div className="card">
                <div className="card-header">
                    Registration Form
                </div>
                <div className="card-body">
                    <form>

                    <div className="form-group">
                        <label htmlFor="inputFirstName">First Name</label>
                        <input ref={firstNameRef} type="text" className="form-control" id="inputFirstName" placeholder="Enter First Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputLastName">Last Name</label>
                        <input ref={lastNameRef} type="text" className="form-control" id="inputLastName" placeholder="Enter Last Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDob">Date of Birth</label>
                        <input ref={dobRef} type="text" className="form-control" id="inputDob" placeholder="Enter DOB" />
                    </div>


                    <div className="form-group">
                        <label htmlFor="inputRole">Role</label>
                        <input ref={roleRef} type="text" className="form-control" id="inputRole" placeholder="Enter Role" />
                    </div>


                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <button onClick={registerUser} className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
          
        </div>
    )
}

// export default withRouter(Register);
export default Register;


