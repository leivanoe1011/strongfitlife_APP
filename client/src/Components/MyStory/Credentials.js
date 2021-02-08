import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import thriveGlobal from "../../images/thrive-global.jpg";
import identityMagazine from "../../images/identity-magazine.jpeg"

function Credentials() {

    return (
        <Container>
            <Row className="mb-5">
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
                    <h4>Published in</h4>
                    <a href="https://thriveglobal.com/stories/strengthen-your-mindset-by-sticking-to-your-workout-ritual-with-these-4-steps/?fbclid=IwAR2m0L6HGkzBQbMhFr3OMfKFqY1j2mZ2KCe_-7j9b6SvJ9_zluQ57T4SjGY&utm_campaign=Published&utm_medium=Thrive&utm_source=Newsletter_Transaction" className="mt-3">
                        <img alt="thrive global logo" src={thriveGlobal} />
                    </a>
                    <a href="https://thriveglobal.com/stories/strengthen-your-mindset-by-sticking-to-your-workout-ritual-with-these-4-steps/?fbclid=IwAR2m0L6HGkzBQbMhFr3OMfKFqY1j2mZ2KCe_-7j9b6SvJ9_zluQ57T4SjGY&utm_campaign=Published&utm_medium=Thrive&utm_source=Newsletter_Transaction" className="link-info">
                        <h4>Strengthen your mindset by sticking to your workout ritual with these 4 steps.</h4>
                    </a>
                    <h4>
                        October 15, 2020
                    </h4>
                    <img alt="identity magazine logo" src={identityMagazine} className="mt-5" />
                </Col>
            </Row>
        </Container>
    )
}

export default Credentials;