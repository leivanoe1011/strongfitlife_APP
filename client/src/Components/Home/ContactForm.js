import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  return (
    <div style={{ backgroundColor: "#00cccc", minHeight: "200px" }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col>
            <h1 className="mb-5 mt-5 text-primary">
              Ready to experience the power of #beastmode without having to
              leave the house?
            </h1>
            <h3 className="mb-5 text-white">
              Snag my Home Gym Made Easy Guide, plus get a FREE week of
              Beastmode Burst Workouts.
            </h3>
          </Col>
          <Form className="mt-2">
            <Form.Row>
              <Col  sm={12} md={12} lg={3}>
                <Form.Control size="lg" placeholder="First name" />
              </Col>
              <Col  sm={12} md={12} lg={3}>
                <Form.Control size="lg" placeholder="Last name" />
              </Col>
              <Col  sm={12} md={12} lg={3}>
                <Form.Control size="lg" type="email" placeholder="Email" />
              </Col>
              <Col  sm={12} md={12} lg={3}>
                <Button
                  type="submit"
                  size="lg"
                  style={{ backgroundColor: "salmon" }}
                  onClick={(e) => e.preventDefault()}
                >
                  LET'S DO THIS!
                </Button>
              </Col>
            </Form.Row>
          </Form>
          <Col className="mt-5 mb-5">
            <p className="text-light">
              We respect your privacy. You may unsubscribe at any time.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForm;
