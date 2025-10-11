import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ✅ Correct imports (valid variable names)
import img1 from "../../Assets/Projects/1.jpeg";
import img2 from "../../Assets/Projects/2.jpeg";
import img3 from "../../Assets/Projects/3.jpeg";
import img4 from "../../Assets/Projects/4.jpeg";
import img5 from "../../Assets/Projects/5.jpeg";
import img6 from "../../Assets/Projects/6.jpeg";
import img7 from "../../Assets/Projects/7.jpeg";
import img8 from "../../Assets/Projects/8.jpeg";
import img9 from "../../Assets/Projects/9.jpeg";
import img10 from "../../Assets/Projects/10.jpeg";
import img11 from "../../Assets/Projects/11.jpeg";
import img12 from "../../Assets/Projects/12.jpeg";
import img13 from "../../Assets/Projects/13.jpeg";
import img14 from "../../Assets/Projects/14.jpeg";
import img15 from "../../Assets/Projects/15.jpeg";

function Projects() {
  const projects = [
    { img: img1, title: "Chatify", desc: "Personal Chat Room or Workspace built with React.js, Material-UI, and Firebase. Supports realtime messaging, image sharing, and reactions." },
    { img: img2, title: "Bits-0f-C0de", desc: "A personal blog built with Next.js and Tailwind CSS. Renders markdown files dynamically with dark mode support." },
    { img: img3, title: "Editor.io", desc: "An online HTML/CSS/JS and markdown editor with live preview and autosave using Local Storage." },
    { img: img4, title: "Plant AI", desc: "CNN image classifier for plant disease detection using PyTorch and ResNet34 with 98% accuracy." },
    { img: img5, title: "AI For Social Good", desc: "NLP project detecting suicide-related posts to help prevent self-harm using text classification." },
    { img: img6, title: "Emotion Detection", desc: "CNN model using FER-2013 dataset to detect human emotions. Integrated with OpenCV for live face recognition." },
    { img: img7, title: "Portfolio Website", desc: "A personal portfolio built with React.js and Bootstrap." },
    { img: img8, title: "Weather App", desc: "Real-time weather updates using OpenWeather API and responsive UI." },
    { img: img9, title: "To-Do App", desc: "Simple task manager built using React Hooks and LocalStorage." },
    { img: img10, title: "CTF Platform", desc: "Capture The Flag web app for cybersecurity challenges." },
    { img: img11, title: "E-commerce Store", desc: "Full-stack MERN e-commerce platform with cart and payment." },
    { img: img12, title: "IoT Irrigation System", desc: "Smart irrigation control using IoT sensors and ML." },
    { img: img13, title: "Student Management System", desc: "Manage students, attendance, and reports using MERN." },
    { img: img14, title: "AI Chatbot", desc: "Semantic chatbot using Gemini API and local data search." },
    { img: img15, title: "Network Visualizer", desc: "Interactive network topology viewer built with D3.js." },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((proj, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={proj.img}
                // title={proj.title}
                // description={proj.desc}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
