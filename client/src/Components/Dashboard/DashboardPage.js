
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Body from "./DashboardBody";
import Chat from "../Chat/Chatroom";
import DashboardBody from "../Dashboard/DashboardBody";

function Dashboard() {


    return (
        <Container>
            <Row>
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                    <Chat />
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                    <DashboardBody />
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                    <DashboardBody />
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;

