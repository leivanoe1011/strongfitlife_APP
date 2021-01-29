import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Testimonials() {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Container>
        <Row>
          <Col className="col-sm-12 col-md-12 col-lg-12 text-center">
            <h1 className="mt-3" style={{ color: "salmon" }}>LOVE NOTES</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel controls={false}>
              <Carousel.Item className="carousel-item text-center p-4">
                <h3>Both mental and physical health are very important</h3>
                <p>
                  I love your virtual classes, they are very efficient way to
                  get beast out of me! I want to get back to shape, lose 5 lbs
                  and remain active. I love that I can get the best workout done
                  in 30 mins. Like how we are provided with the proper
                  combination of exercises and inspired how Vanessa returned
                  back right after having baby :) Vanessa you are awesome ! I
                  love your virtual classes, working out with you and our weekly
                  calls. I love having energy throughout the day. Kulkarni
                </p>
                <h3> -Radhika</h3>
              </Carousel.Item>
              <Carousel.Item className="carousel-item text-center p-4">
                <h3>I love how Vanessa can make workouts fun.</h3>
                <p>
                  and her drive and compassion to help others achieve their
                  goals. I have improved my stamina with these workouts, toned
                  up and lost weight. I’ve Muscle tone and the length of the
                  workout being short with such a big impact on my body. The
                  length of workouts and Vanessa’s energy. Toned muscles, weight
                  loss, variety, excitement. Vanessa truly cares. This is a
                  passion and so much more to her than a job.
                </p>
                <h3> - Toni A</h3>
              </Carousel.Item>
              <Carousel.Item className="carousel-item text-center p-4">
                <h3>I work in the medical field as a vascular</h3>
                <p>
                  sonographer. I’m 46 and spend as much time as I can with my
                  granddaughter. Getting married in November. Needed help with
                  nutrition and accountability. To lose another 20 lbs and
                  maintain. The changes in my body and my eating is finally
                  under control. Flexibility. My clothes are falling off. I have
                  muscles I’ve never had. I have enjoyed working with you. I
                  look forward to our weekly check-ins. It’s great knowing i
                  have your support. I feel better about myself than I have in
                  20 years.
                </p>
                <h3>-Amy O</h3>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;
