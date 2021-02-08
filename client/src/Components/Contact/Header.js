import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import nowPic from "../../images/nowPic.jpg";
import Image from "react-bootstrap/Image";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import "./styles.css";

function Header() {
    return (
        <Container>
            <Row className="contactRow">
                <Col
                    sm={12}
                    md={12}
                    lg={6}
                >
                    <Image src={nowPic} fluid className="nowPic" />
                </Col>
                <Col
                    sm={12}
                    md={12}
                    lg={6}
                >

                    <div className="textCon">
                        <h1 className="p1 bg-white contactHeader">
                            Ready to get Strong & Fit?
                        </h1>
                        <p>
                            Just fill out the form below, click I’M READY, invest in yourself and get ready to gain strength in mind and body so that you can perform at your peak in your workouts and in everyday life!
                        </p>
                        <p>
                            I’m looking forward to hearing from you!
                        </p>
                    </div>

                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    sm={12}
                    md={12}
                    lg={12}
                    className="contactForm"
                >
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control size="lg" type="text" placeholder="first name" />
                            </Col>
                            <Col>
                                <Form.Control size="lg" type="text" placeholder="last name" />
                            </Col>
                        </Form.Row>
                        <Form.Row className="mt-3">
                            <Col>
                                <Form.Control size="lg" type="email" placeholder="email" />
                            </Col>
                        </Form.Row>
                        <Form.Row className="mt-3 mb-5">
                            <Col>
                                <Form.Control as="textarea" size="lg" type="email" placeholder="Your message" />
                            </Col>
                        </Form.Row>
                        <Form.Row className="mt-3 mb-5">
                            <Col>
                                <Button type="submit">
                                    Submit
                            </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;