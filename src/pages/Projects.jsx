import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: " Personal Portfolio Website",
      desc: "A sleek and fully responsive personal portfolio website built with React.js to showcase my projects, skills, and achievements. Designed with modern UI components, smooth navigation, and optimized performance to provide a professional online presence.",
      img: "public/portofolio.png",
      github: "https://github.com/VannurSwamy32968/portfolio",
      live: "https://portfolio.vercel.app",
      skills: ["React.js  | "," JavaScript (ES6+) | ","Bootstrap  | ","CSS3 | ","HTML5  | ","GitHub  | ","Vercel  | ",]
    },
    {
      title: "E-Commerce Site",
      desc: "A fully responsive e-commerce web application built with React.js, featuring product listings, cart management, and smooth UI for a seamless shopping experience.",
      img: "public/commerce.png",
       github: "https://github.com/VannurSwamy32968/E-Commerce.git",
      live: "https://e-commerce-sepia-eta-56.vercel.app/",
      skills: ["React.js  | ","Context API | ","JavaScript (ES6+)  | ","Bootstrap  | ","GitHub  | ","Vercel  | ",]
    },
    {
      title: "Weather Api Site",
      desc: "A responsive weather application that fetches real-time weather data using the OpenWeather API, built with React.js and Bootstrap.",
      img: "public/weather.png",
       github: "https://github.com/VannurSwamy32968/Weather-App.git",
      live: "https://weather-app-lemon-alpha-56.vercel.app/",
    skills:  ["React.js  | "," OpenWeather API | ","JavaScript (ES6+)  | ","Bootstrap  | ","CSS3 | ","HTML5  | ","GitHub  | ","Vercel  | ",]
    },
    {
      title: "Food Court Site",
      desc: "An interactive food court web app built using React.js and Bootstrap, offering a modern UI for browsing food items, categories, and responsive layouts for all devices.",
      img: "public/foodCourt.png",
       github: "https://github.com/VannurSwamy32968/Food_Court_app.git",
      live: "https://food-court-app-delta.vercel.app/",
     skills:["React.js  | "," JavaScript (ES6+) | ","Bootstrap  | ","CSS3 | ","HTML5  | ","GitHub  | ","Vercel  | ",]
    },
    {
      title: "E-Commerce Api",
      desc: "E-commerce platform powered by React.js and Dummy API integration, featuring dynamic product listing, responsive UI, and smooth navigation.",
      img: "public/store.png",
       github: "https://github.com/VannurSwamy32968/Mystore---commerce.git",
      live: "https://mystore-commerce-jet.vercel.app/",
      skills:["React.js  | "," Dummy API | "," JavaScript (ES6+) | ","Bootstrap  | ","CSS3 | ","HTML5  | ","GitHub  | ","Vercel  | ",]
    },
    {
      title: "Basic Portfolio Site",
      desc: "Basic portfolio website created using React.js, featuring clean UI, responsive design, and smooth navigation to display projects and skills.",
      img: "public/basic port.png",
       github: "https://github.com/VannurSwamy32968/portfolio.git",
      live: "https://portfolio-iota-nine-48.vercel.app/",
    skills: ["React.js  | ","JavaScript (ES6+)  | ","Bootstrap  | ","CSS3  | ","HTML5  | ","GitHub  | ","Vercel  | ",]
    },
    {
      title: "Commerce UI Design",
      desc: "A sleek and modern e-commerce UI design built with React.js and Bootstrap, focusing on responsive layouts and user-friendly shopping experience.",
      img: "public/ui img.png",
       github: "https://github.com/VannurSwamy32968/TimePass-Activity.git",
      live: "https://uiactivity.vercel.app/",
      skills: ["React.js  | ","JavaScript (ES6+)  | ","Bootstrap  | ","CSS3  | ","HTML5  | ","GitHub  | ","Vercel  | ",]
    },
    {
      title: "Calculator Basic",
      desc: "A simple and interactive calculator built with React.js, providing basic arithmetic operations with a clean UI.",
      img: "public/calc.png",
       github: "https://github.com/VannurSwamy32968/Calculator.git",
      live: "https://calculator-tau-wheat-78.vercel.app/",
    skills:  ["React.js  | ","JavaScript (ES6+)  | ","Bootstrap  | ","CSS3  | ","HTML5  | ","GitHub  | ","Vercel  | ",]
    },
  ];

  return (
    <section>
      <Container>
        <h2 className="section-title">Projects</h2>
        <Row className="g-4">
          {projects.map((p, i) => (
            <Col md={4} key={i}>
              <Card className="project-card">
                <Card.Img src={p.img} />
                <Card.Body>
                  <Card.Title ><strong>Project Name : </strong>{p.title}</Card.Title>
                  <Card.Text><strong>Skills : </strong>{p.skills}</Card.Text>
                  <Card.Text><strong>About : </strong> {p.desc}</Card.Text>
                  <Button
                    variant="primary"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginLeft: "10px",
                      height: "37px",
                      width: "100px",
                      textDecoration:"none"
                    }}
                  >
                    <FaGithub className="me-2" /> GitHub
                  </Button>

                  <Button
                    variant="primary"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginLeft: "10px",
                      height: "37px",
                      width: "100px",
                      textDecoration:"none"
                    }}
                  >
                    Live Demo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
