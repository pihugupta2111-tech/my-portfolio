import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/guptas.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with Graphic Design and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              I’m fluent in the visual language of creativity, working
              confidently with tools like
              <i>
                <b className="purple">
                  {" "}
                  Adobe Photoshop, Illustrator, InDesign, and CorelDraw .
                </b>
              </i>
              <br />
              <br />
              My fields of interest include creating &nbsp;
              <i>
                <b className="purple">
                  bold visual identities, print designs, digital illustrations,
                </b>{" "}
                and everything in between—from posters and packaging to{" "}
                <b className="purple">
                  social media creatives and brand assets.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I pour my passion into developing eye-catching,
              meaningful designs that tell stories, spark emotion, and leave a
              lasting impression.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-image" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pooja-gupta-2375842a5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pihugupta29_?igsh=MXVtZDFoNTYzenJpcQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Inline CSS inside component */}
      <style jsx="true">{`
        .rounded-image {
          border-radius: 50%;
          width: 300px;
          height: 300px;
          object-fit: cover;
          border: 2px solid #ffffff10;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </Container>
  );
}

export default Home2;
