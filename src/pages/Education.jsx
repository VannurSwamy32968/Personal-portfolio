import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) - AIML",
      school: "JNTUA University",
      year: "2024 - 2025",
      desc: "Focused on full-stack development, data structures, and modern web technologies.",
    },
    {
      degree: "Diploma",
      school: "Govt Polytechnic College",
      year: "2019 - 2022",
      desc: "Studied Mathematics, Physics, and Chemistry and Engineering subjects with strong academic performance.",
    },
   
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Education</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            {education.map((edu, i) => (
              <Card key={i} className="mb-4 shadow-sm border-0">
                <Card.Body className="d-flex">
                  <div
                    style={{
                      fontSize: "2rem",
                      marginRight: "15px",
                      color: "#0d6efd",
                    }}
                  >
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h5 className="fw-bold">{edu.degree}</h5>
                    <h6 className="text-muted">{edu.school}</h6>
                    <small className="text-primary fw-semibold">{edu.year}</small>
                    <p className="mt-2">{edu.desc}</p>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
