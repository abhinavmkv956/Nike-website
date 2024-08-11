import React, { FC } from 'react';
import { Form, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <>
      <Navbar  expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center me-5">
            <img
              src="https://cdn.mos.cms.futurecdn.net/786NzPhpXo6G8hkutJkHTM-1200-80.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav " />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto ms-5">
              <Nav.Link href="#home">New & Featured</Nav.Link>
              <Nav.Link href="#features">Men</Nav.Link>
              <Nav.Link href="#pricing">Women</Nav.Link>
              <Nav.Link href="#pricing">Kids</Nav.Link>
              <Nav.Link href="#pricing">Sale</Nav.Link>
              <Nav.Link href="#pricing">Customise</Nav.Link>
              <Nav.Link href="#pricing">SNKRS</Nav.Link>
            </Nav>
            <Form className="d-flex ms-lg-5">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
              />
            </Form>
            <div className="d-flex align-items-center ms-3">
              <CiHeart className="me-4" size={24} />
              <MdOutlineShoppingBag size={24} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
