import React from "react";
import Questions from "./Questions";
import Body from "./IndexBody";
import LivePrograms from "./LivePrograms";
import Header from "./IndexHeader";

// import Login from "./IndexLogin";

import { AuthContext } from "../../Context/AuthContext";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import BlogUpdates from "./BlogUpdates";
// const { isAuthenticated } = useContext(AuthContext);

function MainBody(props) {
  return (
    <>
      <div className="main-sec about-us-section parallax">
        <Header />
      </div>
      {/* <div className = "container">
                <div className="row">
                    <div className={isAuthenticated ? "col-sm-12" : "col-sm-7"}>
                        <Header/>
                    </div>

                    {isAuthenticated ? <div></div> : <div className="col-sm-5">
                        <Login/>
                    </div> }
                    
                </div>
            </div> */}
      <Body />
      <Questions />
      <LivePrograms />
      <Testimonials />
      <ContactForm />
      <BlogUpdates />
    </>
  );
}

export default MainBody;
