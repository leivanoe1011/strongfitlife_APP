import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import amy from "../../images/Testimonials/Amy-o.jpg";
import ashley from "../../images/Testimonials/Ashley-f.jpg";
import bethany from "../../images/Testimonials/Bethany-M.jpg";
import mallika from "../../images/Testimonials/Mallika-M.jpg";
import maricela from "../../images/Testimonials/Maricela-E.jpg";
import maureen from "../../images/Testimonials/Maureen.jpg";
import nathan from "../../images/Testimonials/Nathan.jpg";
import tonya from "../../images/Testimonials/Tonya-c.jpg";
import trancy from "../../images/Testimonials/Trancy.jpg";
import brittany from "../../images/Testimonials/Brittany-B.jpg";
import "./styles.css";

function Testimonials() {
    return (
        <Container>
            <Row>
                <Col
                    sm={12}
                    md={12}
                    lg={12}

                    className="headerText"
                >
                    <h1>
                        Seeing is Believing!
                    </h1>
                    <h4>
                        These current and past clients have experienced incredible results using my methods, and it shows.
                    </h4>
                </Col>

            </Row>
            <Row className="justify-content-center">
                <Col
                    sm={12}
                    md={12}
                    lg={4}
                >
                    <Image src={maureen} fluid />
                    <p style={{ fontWeight: "bold" }}>
                        I've been in the program
                        </p>
                    <p>
                        for 2 months I have lost 8lbs and have gone down 2 inches in my neck and waist! I feel great! Thanks so much for all the support and encouragement.
                        </p>
                    <p style={{ fontWeight: "bold" }}>
                        -Maureen M, Unleash the Beast
                        </p>
                </Col>
                <Col
                    sm={12}
                    md={12}
                    lg={4}
                >
                    <Image src={nathan} fluid />
                    <p style={{ fontWeight: "bold" }}>
                        My overall strength
                        </p>
                    <p>
                        has dramatically improved, but what I love the most is my overall endurance and being able to recover quickly and keep going.
                        </p>
                    <p style={{ fontWeight: "bold" }}>
                        -Nathan C, 1:1 Personal Training
                        </p>

                </Col>
                <Col
                    sm={12}
                    md={12}
                    lg={4}
                >

                    <Image src={ashley} fluid />
                    <p style={{ fontWeight: "bold" }}>
                        Vanessa is always pushing me to do my best!
                        </p>
                    <p>
                        I don’t care how much I weigh anymore! Total mindset shift. I want to be strong and with that my body is doing it’s thing. You’re the be(a)st, and I am so thankful I found my way to your garage.
                        </p>
                    <p style={{ fontWeight: "bold" }}>
                        - Ashley F, 1:1 Personal Training
                        </p>

                </Col>
                <Col
                    sm={12}
                    md={12}
                    lg={4}
                >

                    <Image src={tonya} fluid />
                    <p style={{ fontWeight: "bold" }}>
                        I have learned that I am capable of
                        </p>
                    <p>
                        much more than what I was giving at the gym. I’ve also learned about healthier food choices that I could incorporate into my regular meals. I'm an extremely picky eater, but the tips and food recipes have been delicious and easy to do. Vanessa is also very in tune with what my body is capable of and pushes me with lots of encouragement to do better and be better. These two things together have helped me become much stronger than I thought possible.
                        </p>
                    <p style={{ fontWeight: "bold" }}>
                        -Tonya C, 1:1 Personal Training
                        </p>

                </Col>
                <Col
                    sm={12}
                    md={12}
                    lg={4}
                >

                    <Image src={mallika} fluid />
                    <p style={{ fontWeight: "bold" }}>
                        Vanessa has changed my body and my life!
                        </p>
                    <p>
                        I’ve lost 7lbs and 1 dress size! My clothes are fitting better. I can do the full workout at a solid pace without having to stop. I feel stronger. And dare I say, I think I am getting leaner and toner! Yay!
                        </p>
                    <p>
                        The at-home virtual workouts are just as hard or harder than the in-person workouts. I can’t believe that in just 30-40 mins you can get a full-body workout that creates results. I don’t need to be sweating my booty for 60 mins every day!
                        </p>
                    <p style={{ fontWeight: "bold" }}>
                        -Mallika M, Unleash the Beast
                        </p>

                </Col>
                <Col
                    sm={12}
                    md={4}
                    lg={4}
                >

                    <Image src={trancy} fluid />
                    <p style={{ fontWeight: "bold" }}>
                        I was unhappy with my appearance and myself.
                        </p>
                    <p>
                        I’ve never felt confident and it was depressing to try on clothes. I had no energy, motivation and would eat anything in sight. I tried working out at home, but felt ridiculous not knowing how to do it. I tried diets, but always gave up. Since working with Vanessa I feel great! I have more energy and confidence! I’ve lost 17 pounds, have gone down a pant size and instead of XXL shirts to hide my body, I can now fit into a Medium comfortably.
                        </p>
                    <p style={{ fontWeight: "bold" }}>
                        -Trancy S , Unleash the Beast
                        </p>

                </Col>
                <Col
                    sm={12}
                    md={4}
                    lg={4}
                >

                    <Image src={maricela} fluid />
                    <p style={{ fontWeight: "bold" }}>
                        I was the biggest I’d ever been,
                        </p>
                    <p>
                        tired, bloated, and uncomfortable with my body. I needed someone to guide me and believe in me. Aside from my weight loss (35 pounds!), now I feel confident about my food choices and more energized. I’m also more conscious of reading food labels. Vanessa truly wants to help you reach your goals and PUSHES you. I'm so glad I found her.
                        </p>
                    <p style={{ fontWeight: "bold" }}>
                        -Maricela E, 1:1 Personal Training
                        </p>

                </Col>
                <Col
                    sm={12}
                    md={4}
                    lg={4}
                >

                    <Image src={brittany} fluid />
                    <p style={{ fontWeight: "bold" }}>
                        Being fit and healthy is very
                        </p>
                    <p>
                        important after having my daughter. I’m more toned now that I’ve worked with Vanessa. My clothes fit better, I went down a size, and have more energy. My health is a priority. My favorite part about working with Vanessa is her encouragement and motivation. I absolutely love working with her; she is top-notch and makes sure to accommodate all your health needs.
                        </p>
                    <p style={{ fontWeight: "bold" }}>
                        -Brittany B, 1:1 Personal Training
                        </p>

                </Col>
                <Col
                    sm={12}
                    md={4}
                    lg={4}
                >

                    <Image src={amy} fluid />
                    <p style={{ fontWeight: "bold" }}>
                        I’m 46 and spend as much time as I can
                        </p>
                    <p>
                        with my granddaughter. I’m getting married in November and needed help with food and accountability. I wanted to not only lose another 20 lbs but also maintain the weight loss. The changes in my body and my eating is finally under control. My clothes are falling off. I have muscles I’ve never had. I look forward to our weekly check-ins. It’s great knowing I have your support. I feel better about myself than I have in 20 years.
                        </p>
                    <p style={{ fontWeight: "bold" }}>
                        -Amy O, Unleash the Beast
                        </p>

                </Col>
                <Col
                    sm={12}
                    md={4}
                    lg={4}
                >
                    <Image src={bethany} fluid />
                    <p style={{ fontWeight: "bold" }}>
                        I was lethargic, gaining weight,
                        </p>
                    <p>
                        eating poorly, and not focused. Since working with Vanessa, I feel stronger and more energetic, with an overall happier demeanor at work and at home. My cravings have subsided, I’m less bloated, and sleep like a rock! I no longer have to catch my breath after taking the stairs at work. My family has also improved their eating habits; we’re eating out less, which is good for the wallet!
                        </p>
                    <p>
                        I usually get bored easily with workouts, but Vanessa makes working out fun! Her encouragement and firmness is a perfect combo, and keeps you motivated and confident. Vanessa is the real deal. Her kindness, passion, and genuine desire to help people become better versions of themselves is second to none. Her program not only helps you physically but mentally. No matter what your goal is, Vanessa will be your best chance for success.
                        </p>
                    <p style={{ fontWeight: "bold" }}>
                        -Bethany M, 1:1 Personal Training
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Testimonials;