import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

const resumeLink = "/Pooja Lalit Gupta Resume.pdf"; // Place inside 'public'

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container
        fluid
        className="resume-section"
        style={{ minHeight: "100vh", overflowY: "auto", padding: "30px 0" }}
      >
        <Particle />

        {/* Top Download Button */}
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Scrollable PDF Preview */}
        <Row className="resume d-flex justify-content-center">
          <div
            style={{
              width: width > 992 ? "60%" : width > 768 ? "75%" : "90%",
              height: "85vh",
              border: "2px solid rgba(255,255,255,0.2)",
              borderRadius: "12px",
              overflow: "auto",
              boxShadow: "0 0 25px rgba(0,0,0,0.3)",
              backgroundColor: "#1a1a1a",
            }}
          >
            <iframe
              src={`${resumeLink}#toolbar=0&navpanes=0`}
              title="Resume Preview"
              width="100%"
              height="100%"
              style={{
                border: "none",
                overflow: "auto",
              }}
            ></iframe>
          </div>
        </Row>

        {/* Bottom Download Button */}
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
