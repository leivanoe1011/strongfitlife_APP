import React from "react";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

function Body() {
  return (
    <div className="textBox">
      <div className="innerTextCon bg-primary">
        <div>
          <p>a few of the things</p>
          <h4>I love</h4>
          <p>
            working out trying new restaurants being spontaneous my family
            traveling
        </p>
        </div>
      </div>
      <div className="innerTextCon text-light" style={{ backgroundColor: "cyan" }}>
        <div>
          <p>a handful of things</p>
          <h4>I enjoy</h4>
          <p>
            being outside exploring new places social gatherings laughing
            massages
        </p>
        </div>
      </div>
      <div className="innerTextCon" style={{ backgroundColor: "salmon" }}>
        <div>
          <p>when in doubt, this will</p>
          <h4>make me happy</h4>
          <p>
            listening to music being inspired being productive learning
            dancing
        </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
