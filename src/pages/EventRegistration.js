import React from "react";

// import react-bootstrap components
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AgencyForm from "../components/AgencyForm";

const styles = {
  prgrph: {
    fontSize: "25px",
  },
  title: {
    fontSize: "30px",
  },
};
function EventRegistration() {
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
                Event Registration
              </h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 bg-light">
        <Container className="p-5">
          <p style={styles.prgrph}>
            Submitting this form does not guarantee a table. Our Event
            Coordinator will reach out for more information and provide a
            confirmation that you have a space. If you are not contacted please
            reach out to Rori Dicker – rori@T2Sdrive.com.
          </p>

          <Image
            className="homeimg"
            src={require("../assets/image/—Pngtree—important-announcement-design-vector-png_8426132.png")}
          />

          <p style={styles.prgrph}>
            This is a direct service event and only open to onsite service
            providers. <br /> <br />
            Tables are free but we suggest a $25-$100 table donation. All
            donations go directly to Thrive2Survive to provide tents, sleeping
            bags, bud passes laundry cards etc. Donations are taken at the event
            or you can donate online at https://www.t2sdrive.com/donations/
          </p>
        </Container>
      </Container>

      <Container fluid className="shadow bg-light mb-5">
        <Container className="p-4">
          <Row>
            <Col sm={12} md={6} lg={12} className="pt-sm-4 pt-lg-0">
              <Container>
                <h4>Registration</h4>
                <AgencyForm />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default EventRegistration;
