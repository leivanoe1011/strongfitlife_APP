
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Body from "./DashboardBody";
import Chat from "../Chat/Chatroom";
import DashboardBody from "../Dashboard/DashboardBody";

function Dashboard() {


    return(
        <section>
                       
            {/* Chatbox */}

            <Container style={{ margin : 25}}>
                <Row>
                    <Col xs={4}>
                        <Chat/>
                    </Col>
                    <Col xs={8}>
                        <DashboardBody/>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs={12}>
                        <DashboardBody/>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}

export default Dashboard;

