import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import ropes from "../../images/ropes.jpg"

function Body() {
    return (
        <Container>
            <Row className="text-center">
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}

                    className="topText"
                >
                    <h4>
                        Are you ready to break through the stubborn fitness plateau that’s holding you back?
                    </h4>
                    <p>
                        The Unleash the Beast program was created to help you push past frustrating workout ruts and set your lean, strong, inner beast free.
                    </p>
                    <p>
                        As an Unleash the Beast Member, you’ll join me, your virtual personal trainer, live on the Zoom platform 4 days a week for a challenging, customized workout burst session (aka sweatfest).
                    </p>
                </Col>

            </Row>
            <Row style={{ marginTop: "50px" }}>
                <Col
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                >
                    <Image src={ropes} fluid />
                </Col>
                <Col
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}

                    className="listText"
                >
                    <h4>
                        What’s included in the program?
                    </h4>
                    <p>
                        ✔ 4 Live Zoom Workouts Every Week
                    </p>
                    <p>
                        ✔ Unlimited Access to Previously Recorded Workouts

                    </p>
                    <p>
                        ✔ Online Access to Your Own Personal Health and Fitness Trainer
                    </p>
                    <p>
                        ✔ Live Accountability and Support in Our Exclusive Facebook Community
                    </p>
                    <p>
                        ✔ Bi-Weekly 1:1 Accountability Calls with Yours Truly
                    </p>
                    <p>
                        ✔ Bi-Weekly Group Check-ins with Your Beastmode Buddies
                    </p>
                    <p>
                        ✔ Motivating Challenges
                    </p>
                    <p>
                        ✔ BONUS Fuel the Beast Recipes + Cooking Videos + Grocery Lists
                    </p>
                    <p style={{ fontWeight: "bold" }}>
                        $99/month
                    </p>
                </Col>
            </Row>
            <Row className="text-center">
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                    <a href="/freeWorkout" className="btn btn-large bg-primary text-light mt-5">
                        SNAG A FREE WORKOUT SESSION
                    </a>
                </Col>
                <Col
                    sm={12}
                    md={12}
                    lg={12}
                >
                    <a href="/signUp" className="btn btn-large text-light mt-5 mb-5" style={{ backgroundColor: "salmon" }}>
                        SIGN UP FOR BEASTMODE NOW
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Body;