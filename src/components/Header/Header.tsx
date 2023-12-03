import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./styles.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button.tsx";

const Header: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  return (
    <header>
      <Navbar
        expanded={show}
        onToggle={handleShow}
        data-bs-theme="dark"
        key={"lg"}
        expand={"lg"}
      >
        <Container fluid>
          <NavLink to={"/"}>
            <Navbar.Brand>LABLOU LOGO</Navbar.Brand>
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
          >
            <Offcanvas.Header>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <NavLink className="nav-link" to="huren" onClick={handleShow}>
                  Huren
                </NavLink>
                <NavLink className="nav-link" to="werken" onClick={handleShow}>
                  Werken
                </NavLink>
                <NavLink className="nav-link" to="overons" onClick={handleShow}>
                  Over ons
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Button className={"d-none d-lg-flex"} variant={"roze"}>
            Contact opnemen
          </Button>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
