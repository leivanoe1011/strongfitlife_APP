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