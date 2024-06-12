// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from "react-bootstrap/Badge";
import Img from "react-cool-img";

const myProjects = [
  {
    image: "images/img1.jpg",
    title: "Razer Blade 16",
    description:
      "An online store primarily focused on selling computers.Our company received custom development, and I participated as a Frontend developer.",
    source: "https://github.com/amananku26/whatsapp-clone",
    demoLink: "https://www.razer.com/",
    badge: "ReactJS",
    liveweb: "https://www.razer.com/",
  },
  {
    image: "images/nextsample.jpg",
    title: "Indemar",
    description:
      "This is the largest web application I have developed, 1,500 developers participated.I proceeded with Frontend Developed.",
    source: "https://github.com/amananku26/Facebook-Clone",
    demoLink: "https://www.indemar.pl/en",
    badge: "NextJS",
    liveweb: "https://www.indemar.pl/en",
  },
  {
    image: "images/1.png",
    title: "RFleet AI",
    description:
      "This page is designed using Laravel , Vue.js, json mocker User can upload post Like and comment on other post also.",
    source: "https://github.com/amananku26/Linkedin-Clone",
    demoLink: "https://rfleet.ai/",
    badge: "Laravel",
    liveweb: "https://rfleet.ai/",
  },
  {
    image: "images/Vue.jpg",
    title: "NouNou",
    description: "This site is developed Next.js as frontend and laravel as backend",
    source: "https://nounou.co.za/",
    badge: "Next.js",
    demoLink: "https://nounou.co.za/",
  },
  {
    image: "images/vetting.jpg",
    title: "Betting",
    description: "I have developed this hybrid app using flutter and firebase",
    source: "https://github.com/amananku26/Basic-Shopping-Cart",
    demoLink: "https://shopping-cart-a0d9a.web.app/",
    badge: "Flutter",
    liveweb: "",
  }
];

const Projects = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Pro</span>jects
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project, index) => {
              return (
                <Col md={4} className="mb-5" key={index + 1}>
                  <Badge className="lmckdncd" pill variant="warning">
                    {project.badge}
                  </Badge>
                  {project.liveweb && (
                    <Badge className="jdnkcjd" pill variant="danger">
                      <a rel="noopener noreferrer"
                        href={project.liveweb}
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Youtube
                      </a>
                    </Badge>
                  )}
                  <div className="project-card">
                    <div className="img-section">
                      <Img
                        placeholder="https://p4.wallpaperbetter.com/wallpaper/990/450/548/loading-wallpaper-preview.jpg"
                        src={project.image}
                        error="images/download.png"
                        alt="React Cool Img"
                      />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                        <div></div>
                        <a rel="noopener noreferrer"
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
