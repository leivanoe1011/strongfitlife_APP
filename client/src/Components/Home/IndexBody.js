import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";

function IndexBody() {
  return (
    <Row className="mr-5 ml-5">
      <Col sm={12} md={5} lg={5} className="indexBodyImg">
        <img
          className="img-fluid mb-5 rounded mt-4"
          alt=""
          src="https://images.squarespace-cdn.com/content/v1/5b98025012b13f43168a1e70/1597363424014-8AS4ARI86TZ9XP52SM8I/ke17ZwdGBToddI8pDm48kGvsJSkuKZO7eYMV5YzgTfR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbFeHJVR-930yo_tzqAvXUZKtiZdkHQUXLVHXpO2mG3ELqRYSQk6N9OYbVZu2wcCwA/vanessa-welcome.jpg?format=750w"
        />
      </Col>

      <Col sm={12} md={6} lg={6} className="bodyCon">
        <div>
          <div className="helloTitle">
            <h2>Hey There! I’m Vanessa,,</h2>
            <h2>Beastmode Personal Trainer & Health Coach.</h2>
          </div>
        </div>

        <div className="helloSec">
          <p>
            I’m a Malbec-sippin’ mama on a mission to help you achieve a fitness
            level you didn’t think was possible.
          </p>
          <p>
            My #1 passion is helping women like you shatter the fitness plateaus
            that hold you back from reaching your full potential.
          </p>
          <p>
            <strong>
              I believe everyone has an inner beast waiting to be unleashed, and
              I’ll push you to unchain yours.
            </strong>
          </p>
          <p>
            You’ll gain bold confidence, unstoppable energy, a bad-ass mindset,
            and powerful results.
          </p>
          <p>
            <em>
              I’m talking
              check-out-that-fearless-beast-staring-back-at-me-in-the-mirror
              kind of results.
            </em>
          </p>
          <p>
            I know because I’ve experienced these life-changing results
            firsthand.
          </p>
        </div>
        <Row className=" mb-4">
          <Container>
            <Col sm={6} md={6} lg={6}>
              {/* <a href="/about">My Story</a> */}
              <a
                className="btn btn-lg text-light"
                href="/"
                style={{ backgroundColor: "salmon" }}
              >
                My Story
              </a>
            </Col>
          </Container>
        </Row>
      </Col>
    </Row>
  );
}

export default IndexBody;
