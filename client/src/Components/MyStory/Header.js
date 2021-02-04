import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import vanessa from "../../images/vanessa-flores.jpeg";

function Header() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col sm={12} md={6} lg={6}>
          <img
            className="float-start myStoryPhoto rounded img-fluid"
            src={vanessa}
          ></img>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className="myStoryText">
            <h4>
              Do you struggle through boring workouts day after day, feeling
              unmotivated and never seeing the results you long for?
              </h4>
            <p>
              Not so long ago I was stuck in the same cycle, trying
              desperately to find a healthy balance between food, exercise and
              mental wellbeing.
              </p>
            <p>
              My story begins in college where I started working out to escape
              the pressures of school. While that was a good thing, I took it
              waaay too far. I became obsessed with being skinny and pushed
              myself to workout two hours every day while barely eating
              anything.
              </p>
            <p>
              It’s no surprise these extreme measures caused my health to
              decline, but instead of finding the right balance, I reverted to
              the other extreme: binge eating. I put on a lot of weight and
              went up 6 sizes.
              </p>
            <p>
              My flip flopping took its toll. I was depressed, none of my
              clothes fit, and I hated life because I was constantly obsessing
              over food — I was stuck in a cycle of stuffing my face and then
              feeling guilty afterward.
              </p>
            <p>
              Sure, I tried to change. I joined different types of gyms and
              tried various styles of eating, but this just made me more
              frustrated because I wasn’t seeing results. I was going through
              the motions instead of pushing myself to the point where I could
              experience real transformation.
              </p>
            <h4 className="myStoryTitle">Then came the wake-up call.</h4>
            <p>
              One day it hit me — I realized my struggle and depression was
              beginning to seriously affect my relationships with my husband,
              family and friends.
              </p>
            <p>
              I didn’t want to lose them, so I made the decision to invest in
              myself and explore different options that would work for me.
              </p>
            <p>
              I landed in a new gym where I learned proper form and technique.
              The workouts were challenging, and I loved the sore feeling I
              felt after working out hard and smart! During this time, I
              started making simple food changes and learning how to fuel my
              body.
              </p>
            <h4 className="myStoryTitle">
              Even better? I lost over 30 pounds in the process!
              </h4>
            <p>
              After experiencing such incredible results, I knew I wanted to
              help others make the same changes. I’m now a Beastmode fitness &
              health coach who’s passionate about teaching others how to feel
              like a badass in their bodies.
              </p>
            <p>
              Becoming fit doesn't have to be time consuming, complicated, and
              expensive. I’ve created my signature Strong Fit Program, Unleash
              the Beast, to help you break through fitness plateaus and gain
              strength and confidence from the convenience and safety of your
              home.
              </p>
          </div>
        </Col>
      </Row>
      <Row className="text-center">
        <Col sm={12} md={12} lg={12}>
          <a
            className="btn btn-large text-light mt-5"
            style={{ backgroundColor: "salmon" }}
          >
            READY TO EXPERIENCE REAL RESULTS? START HERE
            </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
