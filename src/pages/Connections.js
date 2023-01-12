import React from "react";

// import react-bootstrap components
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Connections() {
  return (
    <>
      <Jumbotron fluid className="mb-0">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} className="justify-content-center">
              <Image
                src={require("../assets/image/thrive2survive.jpg")}
                rounded
                width="200vw"
                height="200vw"
              />
            </Col>
            <Col className="pl-md-5">
              <h3 className="display-5 text-center text-lg-left text-light p-0-lg pt-4">
                Connections
              </h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 bg-light">
        <Container className="p-5">
          <Image
            className="img"
            src={require("../assets/image/Oct-Outreach-partner-results.jpg")}
          />
        </Container>
      </Container>
    </>
  );
}

export default Connections;
