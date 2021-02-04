import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import oneToOne from "../../images/onetoone.jpg"

function Body() {
    return (
        <Container>
            <Row>
                <Col
                    sm={12}
                    md={12}
                    lg={6}
                >
                    <img
                        alt="Results don't come from what you do occasionally it comes from what you do consistently"
                        className="img-fluid mt-4 mb-4"
                        src={oneToOne}
                    />
                </Col>
                <Col
                    sm={12}
                    md={12}
                    lg={6}

                    className="oneToOneBody"
                >
                    <h4>Fitness isn’t one-size-fits-all.</h4>
                    <h4>You’re an individual, and your goals are unique to you.</h4>
                    <h4>
                        My personalized online fitness coaching delivers a plan that’s crafted to address specific challenges and offer continued
                        support to help you crush your goals.
                    </h4>
                    <p>
                        ✔ We’ll start with a fitness evaluation, working through a series of movements to establish your baseline and create a plan to progress as your strength and stamina builds.
                    </p>
                    <p>
                        ✔ I’ll customize your 45-minute training sessions to maximize results. Just show up ready to sweat and leave the planning to me!
                    </p>
                    <p>
                        ✔ I’ll hold you accountable, pushing you mentally and physically for a total mind and body transformation.
                    </p>
                </Col>
            </Row>
            <Row className="text-center">
                <Col
                    sm={12}
                    md={12}
                    lg={12}
                >
                    <a className="btn btn-large mb-5 mt-5" href="/learnMore" style={{ backgroundColor: "salmon", color: "white" }}>
                        LEARN MORE ABOUT 1:1 FITNESS COACHING
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Body;