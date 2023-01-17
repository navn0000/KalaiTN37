import React from 'react'
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Styles from "../styles/Header.module.css"
import { useRouter } from 'next/router'
function Header() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("");

  return (

   <>
    <div id={Styles.mobileView}>
        {[false].map((expand) => (
        <Navbar key={expand} bg="" expand={expand} className={Styles.headerBackground}>
          <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className={Styles.toggleIcon}/>
                        <Navbar.Brand className='text-white'>
                        KALAI TN37
                        </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        <Navbar.Brand >
                        KALAI TN37

                        </Navbar.Brand>

                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <>
            <Nav className={Styles.navLinks}>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>


          </Nav>
                </>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    
    </div>
    <div id={Styles.systemView}>
    <Navbar bg="" expand="lg" className={Styles.headerBackground}>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>KALAI TN37</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={Styles.navLinksSystem}>
            <Nav.Link href='/' className={router.pathname == "/" ? "active" : ""}>Home</Nav.Link>
            <Nav.Link href="/products" className={router.pathname == "/products" ? "active" : ""}>Products</Nav.Link>
            <Nav.Link href="/gallery" className={router.pathname == "/gallery" ? "active" : ""}>Gallery</Nav.Link>
            <Nav.Link href="/about" className={router.pathname == "/about" ? "active" : ""}>About</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   </>
  )
}

export default Header
