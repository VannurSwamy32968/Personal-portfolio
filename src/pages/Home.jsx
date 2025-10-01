import React from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import image1 from '/public/image 1.png';
import image2 from "/public/profile 2.jpg";
import FloatingIcons from "../components/FloatingIcons";

export default function Home() {
  return (
    <section className="hero">
      <FloatingIcons />
      <div className="hero-text">
        <h1>
          Hello 👋, <br />
          I'm Chillabandla VannurSwamy
        </h1>
        <p>
          <span style={{ fontSize: "2rem", fontWeight: "700" }}>
            Passionate Frontend Developer
          </span>{" "}
          | Skilled in React.js | JavaScript & API Integrations
        </p>
        <div className="hero-buttons">
          <Button
            variant="light"
            className="btn-custom"
            href="https://github.com/VannurSwamy32968"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="me-2" />
            GitHub
          </Button>
          <Button
            variant="light"
            className="btn-custom"
            href="https://www.linkedin.com/in/chillabandla-vannurswamy-6a72b036b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="me-2" />
            LinkedIn
          </Button>
        </div>
      </div>
      <div className="hero-image">
        <img src={image2} alt="Swamy" />
      </div>
    </section>
  );
}
