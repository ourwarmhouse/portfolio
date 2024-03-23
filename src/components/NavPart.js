import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/_nav.scss";

const NavPart = () => {
  return (
    <div className="fixed ">
      <div className={window.innerWidth > 767 ? "px-5" : "px-2"}>
        <Navbar collapseOnSelect expand="lg" className=" p-0">
          <Navbar.Brand href="" className="logo p-0">
            Apple
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-4 nav-left-side">
              <Nav.Link rel="noopener noreferrer" href="#home" className="nav-item">
                Home
              </Nav.Link>
              <Nav.Link rel="noopener noreferrer" href="#about" className="nav-item">
                About
              </Nav.Link>

              <Nav.Link rel="noopener noreferrer" href="#skills" className="nav-item">
                Skills
              </Nav.Link>
              <Nav.Link rel="noopener noreferrer" href="#projects" className="nav-item">
                Projects
              </Nav.Link>

              <Nav.Link rel="noopener noreferrer" href="#contact" className="nav-item">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavPart;
