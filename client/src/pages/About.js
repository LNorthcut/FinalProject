import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
const About = () => (
  <div>
    <Hero backgroundImage="http://i67.tinypic.com/v7742h.jpg">
      <h1>
        film production <br /> mentors
      </h1>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>
            - get exclusive access to highly qualified leaders in their field -
          </h1>
          <h2>The right connection can change your outcome.</h2>
          <h2>
            Our film production experts offer genuine mentoring relationships.
          </h2>
          <h1>- don't just film it! Master it! -</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p />
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
