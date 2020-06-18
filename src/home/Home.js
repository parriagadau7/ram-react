import React from "react";
import {Container, Row, Col} from "reactstrap";

const Home = () => (
    <Container>
        <Row>
            <Col className="text-center my-5">
                <h1 className="cover-heading">Rick and Morty.</h1>
                <p className="lead">App development on react.</p>
            </Col>
        </Row>
    </Container>
);

export default Home;
