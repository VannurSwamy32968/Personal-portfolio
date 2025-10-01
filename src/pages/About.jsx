import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function About() {
  return (
    <section>
      <Container className="about-page py-5">
        <Row className="align-items-center">
         

          {/* About Text */}
          <Col md={8}>
            <h1>Hi, I’m Vannur Swamy</h1>
            <p>
              I’m a passionate Frontend Developer specializing in{" "}
              <strong>React.js</strong>. I love building responsive and
              interactive web applications. I enjoy turning ideas into
              functional, modern, and user-friendly websites.
            </p>

            <h4>Skills:</h4>
            <p>
              React.js | JavaScript (ES6+) | API Integration | Redux | Bootstrap | Python | MySQL |
              Node.js  | Git/GitHub
            </p>

            <h4>Projects:</h4>
            <p>
              I’ve built projects like responsive portfolio websites, weather
              dashboards, food cart, e-commerce sites using API's to practice my skills and
              create real-world applications and other pracices of daily routine.
            </p>

            <h4>Career Goal:</h4>
            <p>
              I aim to contribute to innovative projects as a software
              developer, while continuously learning and growing in web
              development.
            </p>

            {/* Social Buttons */}
            <div className="mt-3">
              <Button
                variant="light"
                href="https://github.com/VannurSwamy32968"
                target="_blank"
                rel="noopener noreferrer"
                className="me-2"
              >
                <FaGithub className="me-2" /> GitHub
              </Button>

              <Button
                variant="light"
                href="https://www.linkedin.com/in/chillabandla-vannurswamy-6a72b036b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="me-2" /> LinkedIn
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
