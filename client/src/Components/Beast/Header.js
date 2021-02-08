import React from "react";
import Col from "react-bootstrap/col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Beast from "../../images/unleash-banner+copy.png"

function Header() {
    return (
        <div className="parallax3">
            <Container>
                <Row className="justify-content-center">
                    <Image src={Beast} fluid className="mt-5" />
                </Row>
            </Container>
        </div>
    )
}

export default Header;