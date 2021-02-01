import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BlogUpdates() {
  return (
    <div style={{ backgroundColor: "#f2f2f2", minHeight: "300px" }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col className="mt-5">
            <h1>This will dynamically bring in blog posts</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogUpdates;
