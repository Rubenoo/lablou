import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./styles.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ContactOpnemenKnop from "../ContactOpnemenKnop/ContactOpnemenKnop.tsx";

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
        <NavLink to={"/lablou/"}>
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
          onHide={closeShow}
        >
          <Offcanvas.Header>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1">
              <NavLink
                className="nav-link"
                to="zaalverhuur"
                onClick={closeShow}
              >
                Zaalverhuur
              </NavLink>
              <NavLink
                className="nav-link"
                to="werkplekken"
                onClick={closeShow}
              >
                Werkplekken
              </NavLink>
              <NavLink className="nav-link" to="overhetlab" onClick={closeShow}>
                Over het Lab
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <ContactOpnemenKnop
          className={"d-none d-lg-flex justify-content-end"}
          variant={"roze"}
        />
      </Navbar>
    </header>
  );
};
export default Header;
