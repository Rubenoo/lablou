import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./styles.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo.tsx";
import WhatsappButton from "../Whatsapp/Whatsapp.tsx";

const Header: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  const closeShow = () => setShow(false);

  return (
    <header>
      <Navbar
        expanded={show}
        onToggle={handleShow}
        data-bs-theme="dark"
        key={"lg"}
        expand={"lg"}
      >
        <NavLink to={"/"}>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          className={`navbar-toggler-${show ? "close" : "open"}`}
          aria-controls={`offcanvasNavbar-expand-lg`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          data-bs-theme="dark"
          backdrop={false}
          onHide={closeShow}
        >
          <Offcanvas.Header>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1">
              <NavLink
                className="nav-link"
                to="flexruimtes"
                onClick={closeShow}
              >
                Flex- en vergaderruimte
              </NavLink>
              <NavLink
                className="nav-link"
                to="kantoorenatelierruimte"
                onClick={closeShow}
              >
                Kantoor- en atelierruimte
              </NavLink>
              <NavLink className="nav-link" to="agenda" onClick={closeShow}>
                Agenda
              </NavLink>
              <NavLink
                className="nav-link"
                to="onzelaboranten"
                onClick={closeShow}
              >
                Laboranten
              </NavLink>
              <NavLink className="nav-link" to="over" onClick={closeShow}>
                Over
              </NavLink>
              <NavLink
                className="nav-link d-lg-none"
                to="contact"
                onClick={closeShow}
              >
                Contact
              </NavLink>
              <WhatsappButton
                className="nav-link d-lg-none"
                tooltipPlacement="right"
                color="wit"
              />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <div className="d-none d-lg-flex contact-desktop">
          <WhatsappButton tooltipPlacement="bottom" color="wit" />
          <NavLink className="nav-link" to="contact" onClick={closeShow}>
            Contact
          </NavLink>
        </div>
      </Navbar>
    </header>
  );
};
export default Header;
