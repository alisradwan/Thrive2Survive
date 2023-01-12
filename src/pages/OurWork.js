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
    fontSize: "40px",
  },
};
function Ourwork() {
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
                Our Work
              </h3>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 bg-light">
        <Container className="p-5">
          <h3 style={styles.title}>Our Mission</h3>
          <p style={styles.home}>
            The mission of Thrive2Survive is to bring a hot meal, community
            resources, and essentials to the houseless community but most
            importantly human connection. Thrive2Survive also encourages and
            supports building up community leaders through volunteering,
            networking and mentorship.
          </p>
          <br />
          <Image
            className="img"
            src={require("../assets/image/Navagatiion-center-grouo-photo.jpg")}
            rounded
          />
          <br />
          <p>
            In 2018 Charles Hanset had an idea. To serve a community meal,
            provide clothes, and resources that we could connect to our
            houseless community. Setting them on the path of improving their
            lives and building new connections that support their journey long
            term. <br /> <br />
            Charles embarked on putting a team together and finding a location
            where the outreach event could be held. Charles asked Keith Wells if
            he would be willing to get involved. Keith agreed that he wanted to
            help and agreed to coordinate the community meals. Keith also became
            the co-founder of the event. Charles and the rest of his team
            collected and brought clothes and resources that would impact our
            friends lives. The event started at the Navigation Center before we
            even had a name. We fed about 50 people at that first Thrive2Survive
            community outreach event, to some very enthusiastic guests. It was
            amazing to see the community come together with a common goal. Some
            volunteering their time at the event, some collected clothes, some
            donating money to cover the cost of food, others brought desserts,
            all bringing excitement and dedication to helping those in need. It
            was a really fun day for all of us that came to help and for those
            that attended.
          </p>
          <br />

          <video
            className="img"
            src={require("../assets/image/Carmine-interview.mp4")}
            rounded
            controls
          ></video>
          <br />

          <p>
            he first year our outreach event was held on the third Sunday of
            every month at the Navigation Center. Attendance grew over the
            months and we were soon serving approximately 125 people per month.
            The comradery with the volunteers was exciting to be a part of, and
            the connections our friends were making were having an impact. When
            the pandemic began we had to go on hiatus and shortly there after
            the Navigation Center was closed. <br /> <br />
            In April of 2021 Thrive2Survive returned with new vitality, new
            volunteers, more interest, and a much greater need for support than
            ever before.
          </p>
          <br />

          <Image
            className="img"
            src={require("../assets/image/mural-group-picture-website.jpg")}
            rounded
          />
          <br />

          <p>
            Rori Dicker joined the team as our new event coordinator and a new
            format emerged. With Rori’s help, vital resources that were
            previously shared with our houseless friends now attend the event to
            provide real time services. On-site services include dental
            services, medical services, haircuts, housing assessments, mental
            health assessments, access to Washington Department of Licensing,
            detox and SUD treatment options, connection with CPS advocates, and
            many more. <br /> <br /> Our programs also include providing bus
            passes, laundry cards, seasonal necessities to promote harm
            reduction in every aspect, and recovery and houseless focused
            education, in order to provide immediate help, support, and
            assistance to those suffering from the chronic effects of
            houselessness and minimal income. <br /> <br /> In 2022 we partnered
            with Living Hope Church as our new location for the event.
            Thrive2Survive has grown by leaps and bounds and events are held
            quarterly. We currently serve over 200 meals at each event and we
            are adding new community partners, sponsors, and services with every
            event based on what our houseless community is telling us they need.
            <br /> <br /> Also in 2022 Thrive2Survive has been recognized as a
            public charity and officially an independent 501(c)(3). The future
            and the need are endless, more now than ever before. We plan to grow
            and coordinate services to our houseless community for many years to
            come. <br /> <br /> We already have plans for the future. We are
            working on providing assistance to families of overdose victims to
            cover burial and cremation services. We also plan to begin monthly
            popup meals for houseless camps with hopes of educating our friends
            on the services and resources available to them that can improve
            their lives.
          </p>
          <br />

          <Image
            className="img"
            src={require("../assets/image/tim-roori-chales-and-i-3.19.22.jpg")}
            rounded
          />
          <br />
        </Container>
      </Container>
    </>
  );
}

export default Ourwork;
