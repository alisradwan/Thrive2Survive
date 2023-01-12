import React from "react";

// import react-bootstrap components
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// import custom components
import ContactForm from "../components/ContactForm";

// define ContactForm component
function Contact() {
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
                Get in Touch!
              </h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow bg-light mb-5">
        <Container className="p-4">
          <Row>
            <Col>
              <Container>
                <h4>Contact Info</h4>
                <p>
                  <span>
                    <i className="far fa-envelope pr-3"></i>
                  </span>
                  Thrive2Survive@T2Sdrive.com
                </p>
                <p>
                  <span>
                    <i className="fa fa-phone  pr-3"></i>
                  </span>{" "}
                  360-957-0981
                </p>
                <p>
                  <span>
                    <i className="fab fa-facebook pr-3"></i>
                  </span>{" "}
                  Thrive2Survive
                </p>
                <p>
                  <span>
                    <i className="fa fa-regular fa-location-dot pr-3"></i>
                  </span>{" "}
                  4111 E 16th St Vancouver, WA 98661
                </p>
              </Container>
            </Col>
            <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
              <Container>
                <h4>Send a Message</h4>
                <ContactForm />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Contact;
