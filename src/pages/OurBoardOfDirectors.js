import React from "react";

// import react-bootstrap components
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function OurBoardOfDirectors() {
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
                Our Board Of Directors
              </h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 bg-light">
        <Container className="p-5">
          <Row className="erow">
            <Col sm={12} md={6} lg={4} className="justify-content-center">
              <Image
                className="pics"
                src={require("../assets/image/DSC2253-1-683x1024.jpg")}
              />
            </Col>
            <Col className="pl-md-5">
              <div>
                <h3> Charles Hanset – President </h3>
                <p>
                  Charles is the founder, and President of Thrive2Survive. He
                  started doing outreach when he got into recovery back in 2017.
                  His main goal was to provide resources to our unhoused
                  community. He would fill up the back of his little Honda
                  station wagon with clothes, food and up to date useful
                  resources to help people get off the streets and build a human
                  connection by using his own lived experiences. He has always
                  asked others to walk along with him so we can be more
                  effective in providing services. Charles genuinely believes
                  what we cannot do alone, we can do together. Currently, he is
                  the Outreach Supervisor for the Recovery Navigator Program for
                  Clark County where he and his team provide rapid SUD
                  (substance use disorder) crisis response for our community to
                  help prevent them from entering the justice system. He also is
                  a voting board member on the Southwest Washington Behavioral
                  Health Advisory Board since 2019. Charles has been on the
                  Clark County Opioid Task Force Steering Committee since it
                  started in 2019.
                </p>
                <h5>
                  {" "}
                  “A leader is a person who finds a way, makes the way, and
                  ultimately shows the way.”{" "}
                </h5>
              </div>
            </Col>
          </Row>

          <Row className="erow">
            <Col sm={12} md={6} lg={4} className="justify-content-center">
              <Image
                className="pics"
                src={require("../assets/image/DSC2178-684x1024.jpg")}
              />
            </Col>
            <Col className="pl-md-5">
              <div>
                <h3> Rori Dicker – Director of Community Engagement </h3>
                <p>
                  I am grateful to be a part of Thrive2Survive because I believe
                  in the power of human connection which is one of our core
                  values. My role with Thrive2Survive is to develop new
                  relationships with community partners and help our team spread
                  the message that it is never too late, people are never too
                  far gone and if there is a heartbeat there is hope. I bring to
                  the table my lived experience with addiction, mental illness,
                  homelessness and physical and sexual violence. I am extremely
                  grateful to be alive today and from that gratitude grows a
                  tremendous need and desire to spread the message, through
                  action, that together we are stronger.
                </p>
                <h5>
                  “Above all, be true to yourself, and if you cannot put your
                  heart in it, take yourself out of it.”
                </h5>
              </div>
            </Col>
          </Row>

          <Row className="erow">
            <Col sm={12} md={6} lg={4} className="justify-content-center">
              <Image
                className="pics"
                src={require("../assets/image/DSC2322-2-683x1024.jpg")}
              />
            </Col>
            <Col className="pl-md-5">
              <div>
                <h3> Keith Wells – Vice President </h3>
                <p>
                  Keith has been coordinating the hot meals for Thrive2Survive
                  since the very first event in 2018. Since then I have worn
                  many hats, including my current role as Vice President. I have
                  believed in our mission even before it was our mission. I have
                  been volunteering for this group or that group for many years,
                  all helping those less fortunate. Thrive2Survive embodies my
                  values and where I want to share my skills and life
                  experience. I am a project manager by trade, and a certified
                  peer counselor by choice. I have been in recovery myself for
                  over six years. In that six years I managed a recovery
                  resource center, became a recovery coach, worked in a homeless
                  shelter, and became a certified peer counselor. My plan is to
                  use the skills I have learned to continue building
                  Thrive2Survive and spreading our mission to end homelessness.
                </p>
                <h5> Do what you say, Say what you do!</h5>
              </div>
            </Col>
          </Row>

          <Row className="erow">
            <Col sm={12} md={6} lg={4} className="justify-content-center">
              <Image
                className="pics"
                src={require("../assets/image/DSC2294-684x1024.jpg")}
              />
            </Col>
            <Col className="pl-md-5">
              <div>
                <h3> Jim Jensen – Board Advisor </h3>
                <p>
                  Jim Jensen has worked as a substance use disorder counselor,
                  community educator, trainer, and clinical supervisor in the
                  field of addictions since 2006. In addition, he has taught at
                  Clark College’s Addiction Counselor Education Department since
                  2009. He teaches a variety of classes including Theories of
                  Counseling, Introduction to Counseling Family Members, Law and
                  Ethics in Addiction Counseling, Adolescent Assessment and
                  Treatment, and Psychopharmacology. Jim was enlisted in the
                  United States Marine Corps from 2001 to 2006. He obtained a
                  Bachelor of Science in Psychology from Oregon State University
                  and a Master of Arts in Counseling Psychology specializing in
                  Marriage and Family Therapy from National University. Jim
                  currently teaches at Clark College and works with Beacon
                  Health Options as a Senior Project Manager. Jim Jensen, MAC
                </p>
                <h5>
                  “If we take a man as he is, we make him worse, but if we take
                  man as he should be we make him capable of becoming what he
                  can be.” Viktor Frankl
                </h5>
              </div>
            </Col>
          </Row>

          <Row className="erow">
            <Col sm={12} md={6} lg={4} className="justify-content-center">
              <Image
                className="pics"
                src={require("../assets/image/DSC2328-2-684x1024.jpg")}
              />
            </Col>
            <Col className="pl-md-5">
              <div>
                <h3> Don Christensen – Treasurer </h3>
                <p>Bio Pending</p>
                <h5>“Who ya gonna call”</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default OurBoardOfDirectors;
