import React from "react";
import "../styles/_footer.scss";
import { Col, Nav, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer pb-5 pt-5 ">
      <div className="container">
        <Row className="justify-content-between align-items-center">
          <Col md={3} xs={12}>
            <div className="d-flex justify-content-between footer-info mt-4">
              {/* <Nav.Link
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/amananku26/"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="Linkedin"
                >
                 <LinkedInIcon/>
                </Nav.Link>
                <Nav.Link
                  rel="noopener noreferrer"
                  href="https://github.com/amananku26"
                  className="nav-item cursor-pointer"
                  aria-label="Github"
                  target="_blank"
                >
                  <GitHubIcon />
                </Nav.Link>
                <Nav.Link
                  rel="noopener noreferrer"
                  href="https://www.hackerrank.com/amananku26"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="hackerrank"
                >
                  <img
                    height="25px"
                    src="images/hr.jpeg"
                    alt="icon"
                  />
                </Nav.Link>
                <Nav.Link
                  rel="noopener noreferrer"
                  href="https://medium.com/@amananku"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="medium"
                >
                  <img
                    height="25px"
                    src="images/med.png"
                    alt="icon"
                  />
                </Nav.Link>
                <Nav.Link
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/c/AmanAnku"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <YouTubeIcon/>
                </Nav.Link>
                <Nav.Link
                  rel="noopener noreferrer"
                  href="https://stackoverflow.com/users/14988771/aman-anku"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="stackoverflow"
                >
                  <img
                    height="25px"
                    src="images/so.png"
                    alt="icon"
                  />
                </Nav.Link>
                <Nav.Link
                  rel="noopener noreferrer"
                  href="https://opensea.io/coder26"
                  className="nav-item cursor-pointer"
                  target="_blank"
                  aria-label="stackoverflow"
                >
                  <img
                    height="25px"
                    src="https://styles.redditmedia.com/t5_4147ke/styles/communityIcon_lwl9gso33qk61.png"
                    alt="icon"
                  />
                </Nav.Link> */}
            </div>
          </Col>
          <Col md={5} xs={12}>
            <ul className="d-flex justify-content-between p-0 w-100 footer-info mt-4 ">
              <li className="p-1">
                <a rel="noopener noreferrer" href="#home">Home</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#about">About</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#skills">Skills</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#projects">Projects</a>
              </li>
              <li className="p-1">
                <a rel="noopener noreferrer" href="#contact">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="text-center mt-4  footer-end">
          <p>
            Designed by
            <span className="chonburi-font green-text"> My friend Bianca</span>
          </p>
          <p>
            Developed by
            <span className="chonburi-font green-text"> Me</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
