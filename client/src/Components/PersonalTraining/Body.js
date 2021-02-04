import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Body() {
    return (
        <Container>
            <Row>
                <Col
                    sm={12}
                    md={12}
                    lg={6}
                >
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

export default Body;