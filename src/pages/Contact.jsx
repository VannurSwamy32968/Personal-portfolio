import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <h2 className="text-center mb-5 fw-bold">Contact Me</h2>
        <Row className="justify-content-center g-4">
          {/* Contact Form */}
          {/* <Col md={6}>
            <Card className="p-4 shadow-sm border-0">
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="fw-semibold">Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your name" 
                    className="rounded-pill"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-semibold">Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    className="rounded-pill"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label className="fw-semibold">Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Your message" 
                    className="rounded"
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 rounded-pill"
                >
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col> */}

          {/* Contact Info */}
          <Col md={4}>
            <Card className="p-4 shadow-sm border-0 text-center">
              <h5 className="fw-bold mb-3">Get in Touch</h5>
              <p className="mb-2">
                <FaEnvelope className="me-2 text-primary" /> VannurSwamy32968@gmail.com
              </p>
              <p className="mb-3">
                <FaPhone className="me-2 text-primary" /> +91 7989589442
              </p>
              <div className="d-flex justify-content-center gap-3 fs-4 mt-3">
                <a 
                  href="https://github.com/VannurSwamy32968" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/chillabandla-vannurswamy-6a72b036b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FaLinkedin />
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
