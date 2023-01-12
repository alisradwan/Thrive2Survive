import React from "react";

// import react-bootstrap components
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const styles = {
  home: {
    fontSize: "20px",
  },
  title: {
    fontSize: "30px",
  },
};
function home() {
  return (
    <>
      <Jumbotron fluid className="mb-0">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4} className="justify-content-center">
              <Image
                src={require("../assets/image/thrive2survive.jpg")}
                rounded
                width="300vw"
                height="300vw"
              />
            </Col>
            <Col className="pl-md-5">
              <h1 className="display-4 text-center text-lg-left text-light p-0-lg pt-4 title">
                Your Home For Help!
              </h1>
              <p className="text-dark text-center text-md-left h4"></p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 bg-light">
        <Container className="p-5">
          <h3 style={styles.title}>COMING EVENTS</h3>
          <br /> <br />
          <Image
            className="homeimg"
            src={require("../assets/image/homeless-connect-flier.jpg")}
          />
          <br /> <br />
          <p className="prgraf">
            <strong>
              {" "}
              2023 Outreach Events @ Living Hope Church 10am to 2pm{" "}
            </strong>{" "}
            <br /> <br />
            All events @ 2711 NE Andresen Rd, Vancouver, WA 98661 <br /> <br />{" "}
            March 18th <br /> <br /> June 17th <br /> <br /> August 26th
            <br /> <br /> Oct 7th <br /> <br /> Interested in becoming an
            Outreach Event partner? <br /> <br /> Please use our event
            registration page @ Event Registration or contact Rori Dicker @
            360-957-0981 <br /> <br /> <br /> <br />
            <strong> 2023 Car Show Fundraiser </strong> <br /> July 29th
          </p>
        </Container>
      </Container>
    </>
  );
}

export default home;
