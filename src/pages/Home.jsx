import React from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image2 from "/public/profile 2.jpg";
import FloatingIcons from "../components/FloatingIcons";

export default function Home() {
  return (
    <section className="hero d-flex flex-column flex-lg-row align-items-center justify-content-between p-3 p-lg-5">
      <FloatingIcons />
      {/* Text Section */}
      <div className="hero-text text-center text-lg-start mb-4 mb-lg-0">
        <h1>
          Hello 👋, <br />
          I'm Chillabandla VannurSwamy
        </h1>
        <p>
          <span style={{ fontSize: "1.5rem", fontWeight: "700" }}>
            Passionate Frontend Developer
          </span>{" "}
          | Skilled in React.js | JavaScript & API Integrations
        </p>
        <div className="hero-buttons d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-lg-start">
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

      {/* Image Section */}
      <div className="hero-image text-center">
        <img
          src={image2}
          alt="Swamy"
          className="img-fluid rounded"
          style={{ maxWidth: "300px", width: "100%" }}
        />
      </div>
    </section>
  );
}
