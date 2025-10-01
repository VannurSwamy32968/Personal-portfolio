import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

export default function Skills() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 90 },
   { name: "HTML/CSS/Bootstrap", level: 95},
    { name: "Python", level: 85 },
    { name: "MySQL", level: 70 },
    { name: "Node.js", level: 60 },
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4" style={{fontSize:"40px"}}>Skills :</h2>
        <Row className="justify-content-center">
          {skills.map((s, i) => (
            <Col md={6} key={i} className="mb-3" style={{fontSize:"25px"}}>
              <p>{s.name}</p>
              <ProgressBar now={s.level} label={s.level} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
