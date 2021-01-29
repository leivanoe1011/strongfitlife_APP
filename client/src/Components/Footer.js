import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <div className="footer" style={{ backgroundColor: "black" }}>
      <Container className="mt-4">
        <Row>
          <h4 className="text-light">Socials</h4>
          <Col sm={12} md={6} lg={6}>
            <p className="text-light">Twitter</p>
            <p className="text-light">Instagram</p>
            <p className="text-light">Facebook</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
