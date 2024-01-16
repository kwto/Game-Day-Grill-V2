'use client'
import storeItems from "@/src/store/items.json";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "@/src/comps/StoreItems";
import {Footer} from "@/src/comps/Footer";
import Image from "next/image";
import store from "@/src/images/free-shopping.png";
import { Navbar, Nav } from "react-bootstrap";
import React from "react";


const NavBar = () => {
  return (
      <Navbar bg="light" expand="lg" className="flex justify-between items-center">
          <Navbar.Brand href="/">
              <Image src={store} alt="cart" className="logo" width={150} height={50}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex space-x-5 text-white">
                  <Nav.Link href="/" className="text-white">HOME</Nav.Link>
                  <Nav.Link href="contact" className="text-white">ABOUT US</Nav.Link>
                  <Nav.Link href="menu" className="text-white">MENU</Nav.Link>
                  <Nav.Link href="catering" className="text-white">CATERING</Nav.Link>
                  <Nav.Link href="menuinperson" className="text-white">PHYSICAL MENU</Nav.Link>
                  <Nav.Link href="reservation" className="text-white">RESERVATIONS</Nav.Link>
                  </Nav>
          </Navbar.Collapse>
      </Navbar>
  );
}

export default function Home() {
  return (
    <>
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}>
                    <StoreItem {...item} />
                </Col>
            ))}
        </Row>
        <Footer />
    </>
  )
};

/*
const PopupButtonCAQ = () => {
  const openPopup = () => {
    const popup = window.open(
      "customize/cAndQ",
      "Popup",
      "width=275,height=250"
    );
    if (window.focus) popup.focus();
  };
  return (
    <button onClick={openPopup} className="rounded-button margin-right">
      Customize
    </button>
  );
};

const PopupButtonMZZ = () => {
  const openPopup = () => {
    const popup = window.open(
      "customize/MozStick",
      "Popup",
      "width=275,height=250"
    );
    if (window.focus) popup.focus();
  };
  return (
    <button onClick={openPopup} className="rounded-button ">
      Customize
    </button>
  );
};

export default function Home() {
  return (
    <div>
      <NavBar />
      <Image src={backgroundImage} alt="Background" layout="responsive" width={1920} height={1080} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '16.5%' }}>
        <PopupButtonCAQ />
        <PopupButtonMZZ />
      </div>
      <Footer />
    </div>
  );
};


 */