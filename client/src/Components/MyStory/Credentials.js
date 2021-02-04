import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Credentials() {

    return (
        <Container>
            <Row>
                <Col
                    sm={12}
                    md={12}
                    lg={6}
                >
                    <h4>
                        Credentials
                    </h4>
                    <ul>
                        <li>
                            University of Illinois-Urbana Champaign (Nutrition and Kinesiology)
                        </li>
                        <li>
                            Certified Natural Trainer Training Program
                        </li>
                        <li>
                            Nutritarian Studies Program - Dr. Joel Furhman’s Nutritarian Education Institute
                        </li>
                        <li>
                            Strong First’s Kettle Bell and Body Weight Certification Programs
                        </li>
                        <li>
                            NASM Certified Personal Trainer Program
                        </li>
                        <li>
                            Coached at Monkey Bar Gym, Chicago
                        </li>
                        <li>
                            Former Head Coach at Orangetheory Fitness Sandy Springs, GA
                        </li>
                        <li>
                            Coached at Orangetheory Fitness, Smyrna, GA, Cumberland, GA & Murfreesboro, TN
                        </li>
                        <li>
                            Corporate Wellness Coach for Provectus
                        </li>
                    </ul>
                </Col>
                <Col
                    sm={12}
                    md={12}
                    lg={6}
                >
                </Col>
            </Row>
        </Container>
    )
}

export default Credentials;