import React from "react";
import Col from "react-bootstrap/col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Body() {
    return (
        <Container>
            <Row className="text-center">
                <Col
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
            <Row>
                <Col
                    sm={6}
                    md={6}
                    lg={6}
                >
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Body;