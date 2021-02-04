import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <div className="footer" style={{ backgroundColor: "black" }}>
      <Container className="mt-4">
        <Row className="text-center">
          <Col
            sm={12}
            md={12}
            lg={12}
          >
           
            <div className="siteMap">
              <p><a href="/">Home</a></p>
              <p><a href="/myStory">My story</a></p>
              <p><a href="/programs">Programs</a></p>
              <p><a href="/testimonials">Testimonials</a></p>
              <p><a href="/block">Blog</a></p>
              <p><a href="/contact">Contact</a></p>
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-4 mb-4">
          <Col sm={12} md={12} lg={12}>
            
            <div className="siteMap">
              <p><a href="https://www.instagram.com/thestrongfitlife/">Instagram</a></p>
              <p><a href="https://www.facebook.com/thestrongfitlife"> Facebook</a></p>
              <p><a href="mailto:vanessa@thestrongfitlife.com">Email</a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Footer;
