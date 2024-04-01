import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import WorkIcon from "@material-ui/icons/Work";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SkillSvg from "../../images/about-shape.svg";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

const About = () => {
  const [tab, setTab] = useState("experience");
  const [element, controls] = useScroll();

  const methodDoesNotExist = (aman) => {
    throw new Error("this is a sentry error");
  };

  return (
    <motion.div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={SkillSvg} alt="" />

      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container"
      >
        <Row className="">
          <Col className="p-0 text-center" md={5}>
            <img
              placeholder="images/skills/lod.jpeg"
              src="images/com.jpg"
              with={350}
              height={350}
              error="images/skills/error.png"
              alt="React Cool Img"
              onClick={methodDoesNotExist}
            />
          </Col>
          <Col className="" md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text ">Abo</span>ut Me
              </h1>
              <p className="details">
                I have 8 years of experience as a software developer.
                As a seasoned web and mobile app developer, I specialize in MERN Stack, Shopify, and PHP for crafting scalable and efficient web applications
                alongside ReactNative and Flutter for creating dynamic and user-centered mobile applications. Leveraging these diverse skill sets
                <br />
                I aim to solve complex challenges and drive innovation in every project I undertake.
              </p>
              {/* <div className="d-flex align-items-center resume-section ">
                <h6>Resume :</h6>
                <a rel="noopener noreferrer" href="/Aman_Anku_FE_Resume.pdf" target="_blank">
                  View
                </a>
              </div> */}
              <div className="mt-5">
                <Row className="tabs mb-2">
                  <Col
                    className={`
                      ${tab === "experience"
                        ? "active-tab custom-mr-3"
                        : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("experience")}
                  >
                    <WorkIcon />
                    <h5>Work Experiences</h5>
                  </Col>
                  <Col
                    className={`
                      ${tab === "education"
                        ? "active-tab custom-ml-3"
                        : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("education")}
                  >
                    <LocalLibraryIcon />
                    <h5>Educations</h5>
                  </Col>
                </Row>
                <br />
                <div className="about-sub-data">
                  {tab === "experience" ? (
                    <div className="work-experiences">
                      <a style={{ textDecoration: 'none',color:'white', fontSize:24 }} href="https://www.itransition.com/">Itransition</a>
                      <ul>
                        <li>
                          Working As a Full-Stack Developer (Tech - MernStack,NextJs,Node/Express.js,MongoDB,Redis)
                        </li>
                      </ul>
                      <a style={{ textDecoration: 'none',color:'white', fontSize:24 }} href="https://www.goodfirms.co/">XB Software</a>
                      <ul>
                        <li>
                          Working As a Full-Stack Developer (Tech - ReactNative,Flutter,Java)
                        </li>
                      </ul>
                    </div>
                  ) : null}
                  {tab === "education" ? (
                    <div className="education">
                      <div>
                        <h5>B.tech</h5>
                        <ul>
                          <li className="text-justify">
                            Graduated in Computer Science & engineering from
                            &nbsp;<strong>Warsaw University</strong> of Engineering and Technology in
                            2016.
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
};

export default About;
