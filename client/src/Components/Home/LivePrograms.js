import React from "react";
import weight from "../../images/unleash-home.jpg";
import iphone from "../../images/iphone.jpg";
import pushup from "../../images/tsfl-home-page.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function LivePrograms() {
  return (
    <Container>
      <Row className="mb-5">
        <div className="text-center mt-4 mb-4">
          <h2>
            If you’re ready to feel unstoppable and take your fitness routine to
            the next level, click below to experience one of my LIVE, virtual
            programs: Unleash the Beast or 1:1 Personal Training.
          </h2>
        </div>

        <Col sm={12} md={12} lg={4} className="mt-3">
          <Card className="bg-dark text-white liveImg">
            <Card.Img
              variant="top"
              src={weight}
              className="img-fluid"
              alt="weight on person's back"
            ></Card.Img>
            <Card.Body className="text-center">
              <Card.Title className="text-light">Unleash The Beast</Card.Title>
              <Card.Text className="text-center">
                <p className="text-light">
                  Fitness Membership with Live Workouts, Support, and
                  Accountability.
                </p>
              </Card.Text>
              <a className="btn btn-large bg-light" href="/">
                TELL ME MORE!
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={4} className="mt-3">
          <Card className="bg-dark text-white liveImg text-center">
            <Card.Img
              variant="top"
              src={iphone}
              className="img-fluid"
              alt="weight on person's back"
            ></Card.Img>
            <Card.Body>
              <Card.Title className="text-light mt-2">
                Personal Training
              </Card.Title>
              <Card.Text className="text-center">
                <p className="text-light">
                  1:1 Personalized Online Fitness Coaching.
                </p>
              </Card.Text>
              <a className="btn btn-large bg-light mt-2" href="/">
                I WANT INFO!
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={12} lg={4} className="mt-3">
          <Card className="bg-dark text-white liveImg text-center">
            <Card.Img
              variant="top"
              src={pushup}
              className="img-fluid"
              alt="weight on person's back"
            ></Card.Img>
            <Card.Body className="text-center">
              <Card.Title className="text-light mt-2">Testimonials</Card.Title>
              <Card.Text>
                <p className="text-light">
                  Real Transformation Stories from The Beastmode Community
                </p>
              </Card.Text>
              <a className="btn btn-large bg-light mt-1" href="/">
                BRING ME THERE!
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LivePrograms;
