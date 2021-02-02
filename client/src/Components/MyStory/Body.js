import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Body() {
  return (
    <Container style={{marginTop: "100px"}}>
      <Row className="textRow">
        <Col sm={12} md={12} lg={4}>
          <div className="innerTextCon">
            <p>a few of the things</p>
            <h4>I love</h4>
            <p>
              working out trying new restaurants being spontaneous my family
              traveling
            </p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <div className="innerTextCon">
            <p>a handful of things</p>
            <h4>I enjoy</h4>
            <p>
              being outside exploring new places social gatherings laughing
              massages
            </p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={4}>
          <div className="innerTextCon">
            <p>when in doubt, this will</p>
            <h4>make me happy</h4>
            <p>
              listening to music being inspired being productive learning
              dancing
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
