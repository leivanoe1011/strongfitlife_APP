import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Body() {
  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center text-center" >
        <Col
          sm={12}
          md={12}
          lg={{ span: 4, offset: 0 }}
          className="bg-primary" style={{ padding: "50px" }}>
          <div className="innerTextCon">
            <p>a few of the things</p>
            <h4>I love</h4>
            <p>
              working out trying new restaurants being spontaneous my family
              traveling
              </p>
          </div>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={4}
          style={{ backgroundColor: "cyan", padding: "50px" }}>
          <div className="innerTextCon text-light" style={{}}>
            <p>a handful of things</p>
            <h4>I enjoy</h4>
            <p>
              being outside exploring new places social gatherings laughing
              massages
              </p>
          </div>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={4}
          style={{ backgroundColor: "salmon", padding: "50px" }}>
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
