import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import react-bootstrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Contact from "../pages/Contact";

function Donations() {
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
                Donations
              </h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid className="shadow mb-5 bg-light">
        <Container className="p-5">
          <p>
            AT Thrive2Surive, we seek to help the houseless community by holding
            outreach events that provide hot meals, clothes, hygiene items, bus
            passes, laundry card etc. We also provide tents, sleeping bags and
            gift cards when available. <br /> <br /> In addition we need your
            support for our Sonya Fund. A program that helps families faced with
            losing a loved one to the overdose epidemic. Many of these families
            do not have the means to give their loved one a celebration of life
            or a burial service. This fund is dear to our hearts as we have all
            been touched by this tragic loss. We help the families as best we
            can in a time sorrow and loss.
          </p>
          <Image
            src={require("../assets/image/Untitled-presentation-2.png")}
            width="200vh"
            height={"100vw"}
          ></Image>
          <p>
            A Sister gone too soon! <br /> While we have made some great
            strides, but Thrive2Survive still has a lot to accomplish
          </p>
          <br />
          <h3>Would you consider donating to help us achieve our mission?</h3>
          <p>
            If you have any questions, we would be happy to provide you with
            more information about how you can help support our work at
            <a href="/contact"> Contact Us </a>
            <br />
            <br />
            We greatly appreciate your donation, and it will be used to support
            both our Outreach events and the Sonya Fund programs. If you wish to
            contribute, please use the methods below. We process SwipeSimple,
            Square, and PayPal transactions below.
            <br />
            <br />
            Sincerely, the Thrive2Survive Team
          </p>

          <form action="https://swipesimple.com/sign_in">
            <input className="Dbutoon" type="submit" value="Donate" />
          </form>
        </Container>
      </Container>
    </>
  );
}

export default Donations;
