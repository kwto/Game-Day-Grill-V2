'use client'
import Image from "next/image";
import logo from "@/src/images/logo.png";
import backgroundImage from "@/src/images/menutop.png";
import React, { useState } from 'react';
import storeItems from "@/src/store/items.json";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "@/src/comps/StoreItems";


const NavBar = () => {
  return (
    <nav>
      <ul className={"navbar flex justify-between items-center"}>
        <li><Image src={logo} alt="Logo" className="logo" width={150} height={50}/></li>
        <div className={"flex space-x-4"}>
          <li><a href="/">HOME</a></li>
          <li><a href="contact">ABOUT US</a></li>
          <li><a href="menu">MENU</a></li>
          <li><a href="catering">CATERING</a></li>
        </div>
      </ul>
    </nav>
  );
}

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full">
      <ul className="navbar flex justify-between items-center p-4 bg-white">
        <li>
          <a href="/">
            <Image src={logo} alt="Logo" className="logo" width={150} height={50} />
          </a>
        </li>
      </ul>
    </footer>
  );
}


export default function Home() {
  return (
    <>
      <NavBar />
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
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