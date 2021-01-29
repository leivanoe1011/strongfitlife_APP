import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Questions() {
  return (
    <div className="questionSec">
      <Container>
        <Row>
          <Col
            sm={12}
            md={12}
            lg={12}
            className="text-center mb-2 mt-2 questionsCon"
          >
            <h1>
              Have your attempts to workout from home during the pandemic caused
              you to lose your mojo? Do you feel isolated with no real plan of
              attack?
            </h1>
            <p>
              I’ve got good news — You don’t have to head back to the gym to
              achieve badass-level fitness.
            </p>
            <p>
              Say hello to #beastmode, a simple way to achieve true body and
              mind transformation through live, virtual workouts.
            </p>
            <h4>What’s Beastmode?</h4>
            <p>
              Beastmode is a term I use to describe my all-in, no-nonsense
              method of training. My workouts utilize short bursts of intense
              activity to help you break through frustrating plateaus and propel
              you to the next level of strength.
            </p>
            <p>
              You don’t have to think about a thing — just show up for your
              virtual sessions with me as your trainer and be prepared for a
              sweatfest!
            </p>
            <h4>
              All that’s required? A beast-like attitude, a few pieces of
              equipment, and 40 minutes a day.
            </h4>
            <a className="btn btn-large" href="/freesession">
              SNAG A FREE WORKOUT SESSION
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Questions;
